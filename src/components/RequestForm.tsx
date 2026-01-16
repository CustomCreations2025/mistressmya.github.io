import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

interface RequestFormProps {
  title: string;
  description: string;
  requestType: string;
  placeholder?: string;
}

const RequestForm = ({ title, description, requestType, placeholder }: RequestFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.trim().length > 100) {
      errors.name = "Name must be less than 100 characters";
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    } else if (formData.email.trim().length > 255) {
      errors.email = "Email must be less than 255 characters";
    }
    
    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length > 5000) {
      errors.message = "Message must be less than 5000 characters";
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear validation error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!validateForm()) {
      e.preventDefault();
      return;
    }
    setIsSubmitting(true);
    setSubmitError("");
  };

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-800">{title}</CardTitle>
        <p className="text-slate-600">{description}</p>
      </CardHeader>
      <CardContent>
        <form 
          action="https://formsubmit.co/welcome2myasworld@gmail.com" 
          method="POST" 
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Hidden Formsubmit fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://www.mistressmya.world/thank-you" />
          <input type="hidden" name="_subject" value={`New ${requestType} Request`} />
          <input type="hidden" name="request_type" value={requestType} />
          <input type="hidden" name="_autoresponse" value={`Thank you for your ${requestType.toLowerCase()} enquiry! I will review your request and get back to you within 24 hours. For urgent matters, please email welcome2myasworld@gmail.com.`} />

          {/* Error Message */}
          {submitError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700 text-sm">
                {submitError} Please try again or email me directly at{" "}
                <a href="mailto:welcome2myasworld@gmail.com" className="underline">
                  welcome2myasworld@gmail.com
                </a>
              </p>
            </div>
          )}

          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              maxLength={100}
              required
              aria-invalid={!!validationErrors.name}
            />
            {validationErrors.name && (
              <p className="text-sm text-red-600 mt-1">{validationErrors.name}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              maxLength={255}
              required
              aria-invalid={!!validationErrors.email}
            />
            <p className="text-sm text-slate-500 mt-1">I will use this email to respond to your request</p>
            {validationErrors.email && (
              <p className="text-sm text-red-600 mt-1">{validationErrors.email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message">Your Request / Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder={placeholder || "Please share any details about your request..."}
              rows={4}
              maxLength={5000}
              required
              aria-invalid={!!validationErrors.message}
            />
            <p className="text-sm text-slate-500 mt-1">{formData.message.length}/5000 characters</p>
            {validationErrors.message && (
              <p className="text-sm text-red-600 mt-1">{validationErrors.message}</p>
            )}
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Submit Request"
            )}
          </Button>

          <p className="text-xs text-slate-500 text-center">
            All enquiries are handled with complete discretion and confidentiality.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default RequestForm;
