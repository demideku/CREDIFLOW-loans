-- Make BVN required for loan applications
ALTER TABLE public.loan_applications 
ALTER COLUMN bvn SET NOT NULL;