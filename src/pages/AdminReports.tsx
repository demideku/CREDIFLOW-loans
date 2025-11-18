import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { TrendingUp, ArrowLeft, FileText, Download, Calendar } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdminReports = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportType, setReportType] = useState("applications");
  const [reportPeriod, setReportPeriod] = useState("month");

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate('/auth');
      return;
    }

    const { data: roleData } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', session.user.id)
      .eq('role', 'admin')
      .maybeSingle();

    if (!roleData) {
      toast({
        title: "Access Denied",
        description: "You don't have admin privileges",
        variant: "destructive",
      });
      navigate('/');
      return;
    }

    setIsAdmin(true);
  };

  const generateReport = async () => {
    setIsGenerating(true);
    
    try {
      let query = supabase.from('loan_applications').select('*');
      
      // Filter by period
      const now = new Date();
      let startDate = new Date();
      
      switch (reportPeriod) {
        case 'week':
          startDate.setDate(now.getDate() - 7);
          break;
        case 'month':
          startDate.setMonth(now.getMonth() - 1);
          break;
        case 'quarter':
          startDate.setMonth(now.getMonth() - 3);
          break;
        case 'year':
          startDate.setFullYear(now.getFullYear() - 1);
          break;
      }
      
      query = query.gte('created_at', startDate.toISOString());
      
      const { data, error } = await query;
      
      if (error) throw error;
      
      // Generate report based on type
      let reportData: any = {};
      
      if (reportType === 'applications') {
        reportData = {
          total: data?.length || 0,
          approved: data?.filter(app => app.status === 'approved').length || 0,
          rejected: data?.filter(app => app.status === 'rejected').length || 0,
          pending: data?.filter(app => app.status === 'pending').length || 0,
          totalAmount: data?.reduce((sum, app) => sum + Number(app.loan_amount), 0) || 0,
        };
      } else if (reportType === 'financial') {
        const approved = data?.filter(app => app.status === 'approved') || [];
        reportData = {
          approvedApplications: approved.length,
          totalApprovedAmount: approved.reduce((sum, app) => sum + Number(app.loan_amount), 0),
          averageLoanAmount: approved.length > 0 
            ? approved.reduce((sum, app) => sum + Number(app.loan_amount), 0) / approved.length 
            : 0,
        };
      }
      
      // Create CSV content
      const csvContent = generateCSV(reportType, reportData, data || []);
      
      // Download file
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${reportType}-report-${reportPeriod}-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      
      toast({
        title: "Report Generated",
        description: "Your report has been downloaded successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate report",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const generateCSV = (type: string, summary: any, data: any[]) => {
    if (type === 'applications') {
      let csv = 'Summary Report\n\n';
      csv += `Total Applications,${summary.total}\n`;
      csv += `Approved,${summary.approved}\n`;
      csv += `Rejected,${summary.rejected}\n`;
      csv += `Pending,${summary.pending}\n`;
      csv += `Total Loan Amount,₦${summary.totalAmount.toLocaleString()}\n\n`;
      csv += 'Detailed Applications\n';
      csv += 'Name,Email,Phone,Loan Type,Loan Amount,Status,Date\n';
      data.forEach(app => {
        csv += `${app.full_name},${app.email},${app.phone},${app.loan_type},${app.loan_amount},${app.status},${new Date(app.created_at).toLocaleDateString()}\n`;
      });
      return csv;
    } else {
      let csv = 'Financial Report\n\n';
      csv += `Approved Applications,${summary.approvedApplications}\n`;
      csv += `Total Approved Amount,₦${summary.totalApprovedAmount.toLocaleString()}\n`;
      csv += `Average Loan Amount,₦${summary.averageLoanAmount.toLocaleString()}\n`;
      return csv;
    }
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <nav className="bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CrediFlow Admin
              </span>
            </div>
            <Button variant="outline" onClick={() => navigate('/admin')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Card className="shadow-strong max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl">Generate Reports</CardTitle>
                <CardDescription>
                  Create detailed reports for analysis
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="reportType">Report Type</Label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger id="reportType">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="applications">Applications Report</SelectItem>
                  <SelectItem value="financial">Financial Report</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                {reportType === 'applications' 
                  ? 'Detailed report of all loan applications with status breakdown'
                  : 'Financial summary of approved loans and amounts'
                }
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reportPeriod">Time Period</Label>
              <Select value={reportPeriod} onValueChange={setReportPeriod}>
                <SelectTrigger id="reportPeriod">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Last Week</SelectItem>
                  <SelectItem value="month">Last Month</SelectItem>
                  <SelectItem value="quarter">Last Quarter</SelectItem>
                  <SelectItem value="year">Last Year</SelectItem>
                  <SelectItem value="all">All Time</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4">
              <Button 
                onClick={generateReport} 
                disabled={isGenerating}
                className="w-full"
                size="lg"
              >
                <Download className="w-4 h-4 mr-2" />
                {isGenerating ? 'Generating Report...' : 'Generate & Download Report'}
              </Button>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg space-y-2">
              <h4 className="font-semibold flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Report Information
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 ml-6 list-disc">
                <li>Reports are generated in CSV format</li>
                <li>Includes summary statistics and detailed data</li>
                <li>Data is filtered by selected time period</li>
                <li>Can be opened in Excel or Google Sheets</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminReports;
