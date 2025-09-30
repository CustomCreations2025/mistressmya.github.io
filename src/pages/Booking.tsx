
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Clock, Shield, Heart, Loader2 } from "lucide-react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    experience: "",
    contactMethod: "",
    contactDetails: "",
    message: "",
    agreements: {
      age: false,
      consent: false,
      discretion: false,
      safety: false
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const experiences = [
    "First-Time Exploration (1.5 hours)",
    "Continuing Journey (1 hour)",
    "Deep Immersion (2 hours)",
    "Lifestyle Mentoring (60 minutes)",
    "Partnership Exploration (2 hours)",
    "Virtual Connection (45 minutes)"
  ];

  const experienceLevels = [
    "Complete beginner",
    "Some experience",
    "Experienced",
    "Very experienced"
  ];

  const contactMethods = [
    "Email",
    "Text message",
    "Phone call",
    "WhatsApp",
    "Other"
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

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
    setSubmitError("");
    
    // Add a small delay to show the loading state
    setTimeout(() => {
      // The form will submit naturally to Formsubmit
      // If there's an error, it would be caught here
      // For now, we'll let Formsubmit handle the submission
    }, 500);
  };

  const allAgreementsChecked = Object.values(formData.agreements).every(Boolean);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Connect With Me</h1>
          <p className="text-xl text-purple-100">
            Begin your journey with a meaningful conversation about exploration and growth
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
                  <CardTitle className="text-2xl text-slate-800">Expression of Interest Form</CardTitle>
                  <p className="text-slate-600">
                    Please share a bit about yourself and your interests. All information is kept strictly confidential.
                  </p>
                </CardHeader>
                <CardContent>
                  <form 
                    action="https://formsubmit.co/welcome2myasworld@gmail.com" 
                    method="POST" 
                    className="space-y-6"
                    onSubmit={handleSubmit}
                  >
                    {/* Hidden Formsubmit fields */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://www.mistressmya.world/thank-you" />
                    <input type="hidden" name="_autoresponse" value="Thank you for expressing interest in connecting! I will get back to you shortly to discuss your journey. If you need urgent assistance, please email welcome2myasworld@gmail.com." />
                    
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

                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-800">Personal Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
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
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                        <p className="text-sm text-slate-500 mt-1">Optional, but helpful for urgent communications</p>
                      </div>
                    </div>

                    {/* Preferred Contact Method */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-800">What is your safe and preferred contact method?</h3>
                      <p className="text-sm text-slate-600 mb-4">
                        I will only contact you using the preferred method you provide. I will not use any other contact methods.
                      </p>
                      
                      <RadioGroup 
                        value={formData.contactMethod} 
                        onValueChange={(value) => handleInputChange("contactMethod", value)}
                        name="contact_method"
                        className="space-y-3"
                      >
                        {contactMethods.map((method) => (
                          <div key={method} className="flex items-center space-x-2">
                            <RadioGroupItem value={method} id={method} />
                            <Label htmlFor={method}>{method}</Label>
                          </div>
                        ))}
                      </RadioGroup>

                      <div className="mt-4">
                        <Label htmlFor="contactDetails">Please provide the contact details for your selected method (e.g., your email, phone number, or handle) *</Label>
                        <Input
                          id="contactDetails"
                          name="contact_details"
                          value={formData.contactDetails}
                          onChange={(e) => handleInputChange("contactDetails", e.target.value)}
                          placeholder="Enter your contact details..."
                          required
                        />
                      </div>
                    </div>

                    {/* Journey Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-800">Journey Details</h3>
                      
                      <div>
                        <Label htmlFor="service">Preferred Experience *</Label>
                        <select 
                          name="service" 
                          value={formData.service} 
                          onChange={(e) => handleInputChange("service", e.target.value)}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        >
                          <option value="">Select an experience</option>
                          {experiences.map((experience) => (
                            <option key={experience} value={experience}>{experience}</option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="preferredDate">Preferred Date</Label>
                          <Input
                            id="preferredDate"
                            name="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="preferredTime">Preferred Time</Label>
                          <Input
                            id="preferredTime"
                            name="preferredTime"
                            type="time"
                            value={formData.preferredTime}
                            onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="experience">Experience Level *</Label>
                        <select 
                          name="experience" 
                          value={formData.experience} 
                          onChange={(e) => handleInputChange("experience", e.target.value)}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        >
                          <option value="">Select your experience level</option>
                          {experienceLevels.map((level) => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-800">Additional Information</h3>
                      
                      <div>
                        <Label htmlFor="message">Your Interests & Questions</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Please share what draws you to this exploration, any specific interests, boundaries, or questions you may have..."
                          rows={4}
                        />
                      </div>
                    </div>

                    {/* Agreements */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-800">Consent & Understanding</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <input
                            type="checkbox"
                            id="age"
                            name="age_confirmation"
                            checked={formData.agreements.age}
                            onChange={(e) => handleAgreementChange("age", e.target.checked)}
                            required
                            className="h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                          <Label htmlFor="age" className="text-sm leading-5">
                            I confirm that I am 21 years of age or older and legally able to consent to these services.
                          </Label>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <input
                            type="checkbox"
                            id="consent"
                            name="consent_confirmation"
                            checked={formData.agreements.consent}
                            onChange={(e) => handleAgreementChange("consent", e.target.checked)}
                            required
                            className="h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                          <Label htmlFor="consent" className="text-sm leading-5">
                            I understand this is a journey of exploration and all activities are enthusiastically consensual with clear boundaries.
                          </Label>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <input
                            type="checkbox"
                            id="discretion"
                            name="discretion_confirmation"
                            checked={formData.agreements.discretion}
                            onChange={(e) => handleAgreementChange("discretion", e.target.checked)}
                            required
                            className="h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                          <Label htmlFor="discretion" className="text-sm leading-5">
                            I agree to maintain discretion and confidentiality about our connection and explorations.
                          </Label>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <input
                            type="checkbox"
                            id="safety"
                            name="safety_confirmation"
                            checked={formData.agreements.safety}
                            onChange={(e) => handleAgreementChange("safety", e.target.checked)}
                            required
                            className="h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                          <Label htmlFor="safety" className="text-sm leading-5">
                            I understand the importance of safety, communication, and agree to honor all safety guidelines and boundaries.
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
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Submit Expression of Interest"
                      )}
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
                    <p className="text-sm text-slate-600">I will respond to your expression of interest within 24 hours.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Initial Conversation</h4>
                    <p className="text-sm text-slate-600">First-time explorers begin with a conversation to discuss interests, boundaries, and mutual expectations.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Preparation</h4>
                    <p className="text-sm text-slate-600">Detailed guidance will be provided as we plan your exploration together.</p>
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
                    <p className="text-sm text-slate-600">All personal information and communications are kept strictly confidential.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Safety First</h4>
                    <p className="text-sm text-slate-600">Comprehensive safety measures and clear communication are prioritized in all explorations.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Respectful Space</h4>
                    <p className="text-sm text-slate-600">Clean, private, and respectfully maintained space for our connection.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-purple-600" />
                    Support & Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Comprehensive support is provided with every exploration, including emotional care 
                    and follow-up conversations to ensure your growth and well-being.
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
