import { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface VerifyFormProps {
  handleVerify: (e: FormEvent) => void;
  code: string;
  setCode: (value: string) => void;
  verifyError?: string;
  setVerifing?: (value: boolean) => void;
}

const VerifyForm = ({
  handleVerify,
  code,
  setCode,
  verifyError,
  setVerifing,
}: VerifyFormProps) => {
  const handleBack = () => {
    setVerifing && setVerifing(false);
  };
  return (
    <div className="max-w-md flex justify-center items-center flex-col">
      <Card className="w-full hover:border-primary">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            Verification Code
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerify} className="space-y-4">
            <Input
              value={code}
              id="code"
              name="code"
              placeholder="Enter your code"
              className="bg-transparent text-white border-b border-blue-900 focus:border-white focus:ring-0"
              onChange={(e) => setCode(e.target.value)}
            />
            {verifyError && (
              <div className="text-red-400 text-sm py-2">{verifyError}</div>
            )}
            <div className="text-slate-400 text-sm">
              Please check your email for the verification code
            </div>
            <Button
              type="submit"
            >
              Complete Sign Up
            </Button>
          </form>
        </CardContent>
        <div className="mt-2 text-white text-sm flex items-center justify-center">
          back to
          <Button variant={"link"} onClick={handleBack}>
            Signup
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default VerifyForm;
