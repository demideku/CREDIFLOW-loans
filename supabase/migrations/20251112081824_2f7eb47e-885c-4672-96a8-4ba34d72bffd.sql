-- Enable realtime for loan_applications table
ALTER TABLE loan_applications REPLICA IDENTITY FULL;

-- Add the table to the realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE loan_applications;