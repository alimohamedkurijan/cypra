"use client";

import { useApp } from "../components/Providers";
import { useState } from "react";

export default function ConsultationPage() {
  const { language, isHydrated } = useApp();
  const t = language === "ar" ? ar : en;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    consultationType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (!isHydrated) {
    return (
      <div className="font-sans">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,_rgba(34,197,94,0.15),_transparent_60%),radial-gradient(700px_400px_at_80%_20%,_rgba(34,197,94,0.08),_transparent_60%)] pointer-events-none" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-28">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
                Expert Cybersecurity Consulting
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl">
                Get tailored guidance from certified cybersecurity professionals to assess, plan, and strengthen your organization's defenses.
              </p>
            </div>
          </div>
        </section>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p>Loading form...</p>
          </div>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="font-sans">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,_rgba(34,197,94,0.15),_transparent_60%),radial-gradient(700px_400px_at_80%_20%,_rgba(34,197,94,0.08),_transparent_60%)] pointer-events-none" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-28">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
                {t.heroTitle}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl">
                {t.heroSubtitle}
              </p>
            </div>
          </div>
        </section>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">{t.successTitle}</h2>
            <p className="text-muted-foreground mb-6">{t.successMessage}</p>
            <a 
              href="/" 
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow-sm hover:brightness-95"
            >
              {t.backToHome}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,_rgba(34,197,94,0.15),_transparent_60%),radial-gradient(700px_400px_at_80%_20%,_rgba(34,197,94,0.08),_transparent_60%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              {t.heroTitle}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold mb-6">{t.formTitle}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t.nameLabel} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t.emailLabel} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  {t.companyLabel}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  {t.phoneLabel}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            {/* Consultation Type */}
            <div>
              <label htmlFor="consultationType" className="block text-sm font-medium mb-2">
                {t.consultationTypeLabel} *
              </label>
              <select
                id="consultationType"
                name="consultationType"
                value={formData.consultationType}
                onChange={handleInputChange}
                required
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">{t.selectOption}</option>
                <option value="security-assessment">{t.assessment}</option>
                <option value="penetration-testing">{t.pentesting}</option>
                <option value="compliance-audit">{t.compliance}</option>
                <option value="incident-response">{t.incidentResponse}</option>
              </select>
            </div>

            {/* Budget and Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">
                  {t.budgetLabel}
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">{t.selectBudget}</option>
                  <option value="under-10k">{t.under10k}</option>
                  <option value="10k-50k">{t.range10k50k}</option>
                  <option value="50k-100k">{t.range50k100k}</option>
                  <option value="over-100k">{t.over100k}</option>
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                  {t.timelineLabel}
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">{t.selectTimeline}</option>
                  <option value="asap">{t.asap}</option>
                  <option value="1-month">{t.oneMonth}</option>
                  <option value="3-months">{t.threeMonths}</option>
                  <option value="6-months">{t.sixMonths}</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder={t.messagePlaceholder}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow-sm hover:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t.submitting : t.submitButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const en = {
  heroTitle: "Expert Cybersecurity Consulting",
  heroSubtitle: "Get tailored guidance from certified cybersecurity professionals to assess, plan, and strengthen your organization's defenses.",
  formTitle: "Request a Consultation",
  nameLabel: "Full Name",
  emailLabel: "Email Address",
  companyLabel: "Company/Organization",
  phoneLabel: "Phone Number",
  consultationTypeLabel: "Type of Consultation",
  selectOption: "Select consultation type",
  assessment: "Security Assessment",
  pentesting: "Penetration Testing",
  compliance: "Compliance Audit",
  incidentResponse: "Incident Response Planning",
  budgetLabel: "Budget Range",
  selectBudget: "Select budget range",
  under10k: "Under $10,000",
  range10k50k: "$10,000 - $50,000",
  range50k100k: "$50,000 - $100,000",
  over100k: "Over $100,000",
  timelineLabel: "Preferred Timeline",
  selectTimeline: "Select timeline",
  asap: "As soon as possible",
  oneMonth: "Within 1 month",
  threeMonths: "Within 3 months",
  sixMonths: "Within 6 months",
  messageLabel: "Additional Details",
  messagePlaceholder: "Please provide any additional information about your cybersecurity needs, current challenges, or specific requirements...",
  submitButton: "Request Consultation",
  submitting: "Submitting...",
  successTitle: "Request Submitted Successfully!",
  successMessage: "Thank you for your interest in our cybersecurity consulting services. We'll review your request and get back to you within 24 hours.",
  backToHome: "Back to Home",
};

const ar = {
  heroTitle: "استشارات الأمن السيبراني المتخصصة",
  heroSubtitle: "احصل على إرشاد مخصص من خبراء معتمدين لتقييم وتخطيط وتعزيز دفاعات مؤسستك.",
  formTitle: "طلب استشارة",
  nameLabel: "الاسم الكامل",
  emailLabel: "عنوان البريد الإلكتروني",
  companyLabel: "الشركة/المؤسسة",
  phoneLabel: "رقم الهاتف",
  consultationTypeLabel: "نوع الاستشارة",
  selectOption: "اختر نوع الاستشارة",
  assessment: "تقييم الأمان",
  pentesting: "اختبار الاختراق",
  compliance: "مراجعة الامتثال",
  incidentResponse: "تخطيط الاستجابة للحوادث",
  budgetLabel: "نطاق الميزانية",
  selectBudget: "اختر نطاق الميزانية",
  under10k: "أقل من 10,000 دولار",
  range10k50k: "10,000 - 50,000 دولار",
  range50k100k: "50,000 - 100,000 دولار",
  over100k: "أكثر من 100,000 دولار",
  timelineLabel: "الجدول الزمني المفضل",
  selectTimeline: "اختر الجدول الزمني",
  asap: "في أقرب وقت ممكن",
  oneMonth: "خلال شهر واحد",
  threeMonths: "خلال 3 أشهر",
  sixMonths: "خلال 6 أشهر",
  messageLabel: "تفاصيل إضافية",
  messagePlaceholder: "يرجى تقديم أي معلومات إضافية حول احتياجاتك في الأمن السيبراني أو التحديات الحالية أو المتطلبات المحددة...",
  submitButton: "طلب استشارة",
  submitting: "جاري الإرسال...",
  successTitle: "تم إرسال الطلب بنجاح!",
  successMessage: "شكراً لاهتمامك بخدمات الاستشارات الأمنية. سنراجع طلبك ونعود إليك خلال 24 ساعة.",
  backToHome: "العودة للرئيسية",
};
