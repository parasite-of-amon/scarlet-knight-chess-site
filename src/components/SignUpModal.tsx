import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface SignUpModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToSignIn: () => void;
}

const SignUpModal = ({ open, onOpenChange, onSwitchToSignIn }: SignUpModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Sign Up</DialogTitle>
          <DialogDescription>
            Create your account to join our chess community
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="signup-name">Full Name</Label>
            <Input
              id="signup-name"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-email">Email</Label>
            <Input
              id="signup-email"
              type="email"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <Input
              id="signup-password"
              type="password"
              placeholder="Create a strong password"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-confirm-password">Confirm Password</Label>
            <Input
              id="signup-confirm-password"
              type="password"
              placeholder="Re-enter your password"
            />
          </div>
          <div className="space-y-3 pt-2 border-t">
            <div className="flex items-start space-x-2">
              <Checkbox id="admin-signup" />
              <div className="space-y-1 leading-none">
                <label
                  htmlFor="admin-signup"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Sign up as Admin
                </label>
                <p className="text-xs text-muted-foreground">
                  Check this if you want to register as an administrator
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-key">Admin Key</Label>
              <Input
                id="admin-key"
                type="password"
                placeholder="Enter admin key (required for admin signup)"
              />
              <p className="text-xs text-muted-foreground">
                Only required if signing up as an admin
              </p>
            </div>
          </div>
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Sign Up
          </Button>
          <div className="text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <button
              onClick={onSwitchToSignIn}
              className="text-primary hover:underline font-medium"
            >
              Sign In
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpModal;
