
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Clock, Shield, Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    experience: "",
    message: "",
    agreements: {
      age: false,
      consent: false,
      discretion: false,
      safety: false
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Newbie Session (1.5 hours - £300)",
    "Regular Session (1 hour - £250)",
    "Extended Session (2 hours - £500)",
    "Lifestyle Coaching (60 min - £300)",
    "Couples Session (2 hours - £500)",
    "Virtual Consultation (45 min - £150)"
  ];

  const experienceLevels = [
    "Complete beginner",
    "Some experience",
    "Experienced",
    "Very experienced"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAgreementChange = (field: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      agreements: { ...prev.agreements, [field]: checked }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-booking-notification', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          experience: formData.experience,
          message: formData.message
        }
      });

      if (error) throw error;

      toast.success("Booking request sent successfully! You'll receive a confirmation email shortly.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        experience: "",
        message: "",
        agreements: {
          age: false,
          consent: false,
          discretion: false,
          safety: false
        }
      });
    } catch (error: any) {
      console.error("Error submitting booking:", error);
      toast.error("Failed to send booking request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const allAgreementsChecked = Object.values(formData.agreements).every(Boolean);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Book Your Session</h1>
          <p className="text-xl text-purple-100">
            Begin your journey with a professional consultation
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">Booking Request Form</CardTitle>
                  <p className="text-slate-600">
                    Please fill out this form to request a session. All information is kept strictly confidential.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-800">Personal Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                        <p className="text-sm text-slate-500 mt-1">Optional, but helpful for urgent communications</p>
                      </div>
                    </div>

                    {/* Session Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-800">Session Details</h3>
                      
                      <div>
                        <Label htmlFor="service">Preferred Service *</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>{service}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="preferredDate">Preferred Date</Label>
                          <Input
                            id="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="preferredTime">Preferred Time</Label>
                          <Input
                            id="preferredTime"
                            type="time"
                            value={formData.preferredTime}
                            onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="experience">Experience Level *</Label>
                        <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            {experienceLevels.map((level) => (
                              <SelectItem key={level} value={level}>{level}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-800">Additional Information</h3>
                      
                      <div>
                        <Label htmlFor="message">Special Requests or Questions</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Please share any specific interests, boundaries, or questions you may have..."
                          rows={4}
                        />
                      </div>
                    </div>

                    {/* Agreements */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-800">Required Agreements</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="age"
                            checked={formData.agreements.age}
                            onCheckedChange={(checked) => handleAgreementChange("age", checked as boolean)}
                          />
                          <Label htmlFor="age" className="text-sm leading-5">
                            I confirm that I am 21 years of age or older and legally able to consent to these services.
                          </Label>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="consent"
                            checked={formData.agreements.consent}
                            onCheckedChange={(checked) => handleAgreementChange("consent", checked as boolean)}
                          />
                          <Label htmlFor="consent" className="text-sm leading-5">
                            I understand this is a professional service and all activities are consensual with clear boundaries.
                          </Label>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="discretion"
                            checked={formData.agreements.discretion}
                            onCheckedChange={(checked) => handleAgreementChange("discretion", checked as boolean)}
                          />
                          <Label htmlFor="discretion" className="text-sm leading-5">
                            I agree to maintain discretion and confidentiality about our professional relationship.
                          </Label>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="safety"
                            checked={formData.agreements.safety}
                            onCheckedChange={(checked) => handleAgreementChange("safety", checked as boolean)}
                          />
                          <Label htmlFor="safety" className="text-sm leading-5">
                            I understand the importance of safety protocols and agree to follow all safety guidelines.
                          </Label>
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600"
                      disabled={!allAgreementsChecked || isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit Booking Request"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-purple-600" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800">Response Time</h4>
                    <p className="text-sm text-slate-600">I will respond to your booking request within 24 hours.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Consultation</h4>
                    <p className="text-sm text-slate-600">First-time clients start with a consultation to discuss boundaries and expectations.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Preparation</h4>
                    <p className="text-sm text-slate-600">Detailed preparation instructions will be provided upon booking confirmation.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-purple-600" />
                    Safety & Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800">Confidentiality</h4>
                    <p className="text-sm text-slate-600">All personal information is kept strictly confidential.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Safety Protocols</h4>
                    <p className="text-sm text-slate-600">Comprehensive safety measures are in place for all sessions.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Professional Environment</h4>
                    <p className="text-sm text-slate-600">Clean, private, and professionally maintained space.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-purple-600" />
                    Aftercare
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Comprehensive aftercare is provided with every session, including emotional support 
                    and follow-up check-ins to ensure your well-being.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
