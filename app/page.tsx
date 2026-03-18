"use client";

import React, { FormEvent, useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Home,
  Instagram,
  Laptop2,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  ClipboardList,
  Mail,
  Database,
} from "lucide-react";

const SITE_URL = "https://edunest.org.in"; 
const WHATSAPP_NUMBER = "916389186996";
const PRIMARY_PHONE = "6389186996";
const SECONDARY_PHONE = "8869987481";
const SECONDARY_CONTACT_NAME = "Abhishek Yadav";
const INSTAGRAM_URL =
  "https://www.instagram.com/edunest.classes?igsh=MWo4bng5am9iMTFhaQ==";
const CLIENT_EMAIL = "edunesthometuition@gmail.com"; 
const LOGO_PATH = "/edunest-logo.jpeg";
const HERO_IMAGE = "/images/hero-cutout.png";

const STUDENT_FORMSPREE_ENDPOINT = "https://formspree.io/f/xreyypge";
const TUTOR_FORMSPREE_ENDPOINT = "https://formspree.io/f/xdawweod";

const BRAND = {
  primary: "#1F6FB2",
  secondary: "#FFB547",
  accent: "#45C4B0",
  bg: "#F6FAFF",
  text: "#1E293B",
  muted: "#64748B",
};

const cities = ["Jhansi", "Indore"];

const classOptions = [
  "Nursery",
  "LKG",
  "UKG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
  "CBSE",
  "ICSE",
  "Navodaya Preparation",
  "Sainik School Preparation",
  "IIT-JEE",
  "NEET",
  "Olympiad",
];

const subjectOptions = [
  "Mathematics",
  "Science",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "Hindi",
  "Social Studies",
  "Computer",
  "Accounts",
  "Business Studies",
  "Economics",
  "Spoken English",
  "Arts",
  "Music",
  "CBSE Preparation",
  "ICSE Preparation",
  "Navodaya Preparation",
  "Sainik School Preparation",
  "IIT-JEE Preparation",
  "NEET Preparation",
  "Olympiad Preparation",
];

const parentTimings = [
  "Morning",
  "Afternoon",
  "Evening",
  "Weekend",
  "Flexible",
];
const teacherTimingOptions = [
  "Morning",
  "Afternoon",
  "Evening",
  "Weekend",
  "Flexible",
];
const tuitionModes = ["Home Tuition", "Online Tuition", "Both"];
const genderOptions = ["No Preference", "Male", "Female"];
const teacherGenderOptions = ["Male", "Female", "Other"];

type FormTab = "student" | "tutor";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Subjects", href: "#subjects" },
  { label: "Apply", href: "#lead-forms" },
  { label: "FAQ", href: "#faq" },
];

const parentBenefits = [
  {
    icon: ShieldCheck,
    title: "Trusted Matching",
    text: "We understand the requirement first and then connect parents with a suitable tutor based on subject, class, board, location, and timing.",
  },
  {
    icon: Laptop2,
    title: "Home & Online Options",
    text: "Choose home tuition, online tuition, or both depending on your child’s routine and comfort level.",
  },
  {
    icon: Sparkles,
    title: "Simple Lead Process",
    text: "No complicated marketplace logic. Just fill the form and EduNest follows up directly.",
  },
  {
    icon: Users,
    title: "All Academic Levels",
    text: "Support from Nursery to Class 12 along with CBSE, ICSE, Navodaya, Sainik School, IIT-JEE, NEET, and foundation preparation.",
  },
  {
    icon: Home,
    title: "City-Focused Service",
    text: "Special focus on local service quality for families and tutors in Jhansi and Indore.",
  },
  {
    icon: MessageCircle,
    title: "Fast WhatsApp Follow-Up",
    text: "Parents and tutors can both connect quickly using WhatsApp without friction.",
  },
];

const parentSteps = [
  {
    step: "01",
    title: "Share Your Requirement",
    text: "Tell EduNest the class, board, subject, city, tuition mode, and preferred timing.",
  },
  {
    step: "02",
    title: "Get the Right Match",
    text: "The team reviews the requirement and identifies a suitable tutor profile.",
  },
  {
    step: "03",
    title: "Start the Learning Journey",
    text: "Proceed with demo or discussion and move ahead with the selected tutor.",
  },
];

const categories = [
  {
    title: "School Tuition",
    items: [
      "Mathematics",
      "Science",
      "English",
      "Hindi",
      "Social Studies",
      "Computer",
    ],
  },
  {
    title: "Board Preparation",
    items: [
      "CBSE",
      "ICSE",
      "Class 10 Boards",
      "Class 12 Boards",
      "Revision Support",
      "Exam Strategy",
    ],
  },
  {
    title: "Entrance Preparation",
    items: [
      "Navodaya Preparation",
      "Sainik School Preparation",
      "Olympiad",
      "Foundation Preparation",
    ],
  },
  {
    title: "Competitive Exams",
    items: ["IIT-JEE", "NEET", "Physics", "Chemistry", "Biology", "Mathematics"],
  },
];

const faqItems = [
  {
    q: "How does EduNest work?",
    a: "Parents submit their requirement and EduNest connects them with a suitable tutor based on subject, class, board, city, timing, and mode.",
  },
  {
    q: "Do you provide home tuition and online tuition?",
    a: "Yes. EduNest supports home tuition, online tuition, and both options depending on the requirement.",
  },
  {
    q: "Which classes and subjects are covered?",
    a: "We support Nursery to Class 12, major school subjects, and also CBSE, ICSE, Navodaya, Sainik School, IIT-JEE, NEET, Olympiad, and selected skill-based learning support.",
  },
  {
    q: "Do you provide tutors for CBSE and ICSE boards?",
    a: "Yes. EduNest supports tutor matching for CBSE and ICSE students across school classes and board exam preparation.",
  },
  {
    q: "Do you provide preparation support for Navodaya and Sainik School exams?",
    a: "Yes. EduNest also supports tutor requirements for Navodaya and Sainik School preparation depending on city, timing, and tutor availability.",
  },
  {
    q: "Can tutors apply from Jhansi and Indore?",
    a: "Yes. Teachers can apply through the tutor form by submitting profile details, subjects, experience, timings, and resume information.",
  },
  {
    q: "How is contact handled after submission?",
    a: "The form currently saves data online and then opens a prefilled WhatsApp message so the EduNest team can receive the lead quickly and follow up directly.",
  },
  {
    q: "Can form data also be saved online or sent to email?",
    a: "Yes. This version supports online saving through Formspree. Email sending can also be added using Formspree, EmailJS, or a custom backend.",
  },
  {
    q: "Do you show tutors publicly on the website?",
    a: "Not right now. EduNest currently follows a lead-based matching model instead of a public tutor listing system.",
  },
];

type ParentFormState = {
  parentName: string;
  studentName: string;
  phone: string;
  whatsapp: string;
  studentClass: string;
  subject: string;
  city: string;
  area: string;
  mode: string;
  preferredTutorGender: string;
  preferredTiming: string;
  message: string;
};

type TeacherFormState = {
  fullName: string;
  phone: string;
  whatsapp: string;
  gender: string;
  age: string;
  city: string;
  subjects: string;
  classesTaught: string;
  qualification: string;
  currentProfession: string;
  experience: string;
  mode: string;
  availableTimings: string;
  expectedFee: string;
  resumeFileName: string;
};

const initialParentForm: ParentFormState = {
  parentName: "",
  studentName: "",
  phone: "",
  whatsapp: "",
  studentClass: "",
  subject: "",
  city: "",
  area: "",
  mode: "",
  preferredTutorGender: "No Preference",
  preferredTiming: "",
  message: "",
};

const initialTeacherForm: TeacherFormState = {
  fullName: "",
  phone: "",
  whatsapp: "",
  gender: "",
  age: "",
  city: "",
  subjects: "",
  classesTaught: "",
  qualification: "",
  currentProfession: "",
  experience: "",
  mode: "",
  availableTimings: "",
  expectedFee: "",
  resumeFileName: "",
};

function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function isValidPhone(value: string) {
  return /^[6-9]\d{9}$/.test(value.trim());
}

async function submitToFormspree(
  endpoint: string,
  payload: Record<string, string>
) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.errors?.[0]?.message || "Form submission failed.");
  }

  return data;
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] shadow-sm"
      style={{ borderColor: "#D7E8FF", background: "white", color: BRAND.primary }}
    >
      {children}
    </span>
  );
}

function InputField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-slate-700">
        {label} {required ? <span style={{ color: BRAND.secondary }}>*</span> : null}
      </span>
      {children}
    </label>
  );
}

function CommonInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-blue-100 ${
        props.className ?? ""
      }`}
      style={{ borderColor: "#DDE6F2" }}
    />
  );
}

function CommonSelect(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:ring-4 focus:ring-blue-100 ${
        props.className ?? ""
      }`}
      style={{ borderColor: "#DDE6F2" }}
    />
  );
}

function CommonTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`min-h-[120px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-blue-100 ${
        props.className ?? ""
      }`}
      style={{ borderColor: "#DDE6F2" }}
    />
  );
}

function EduNestLogo({ footer = false }: { footer?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`relative overflow-hidden rounded-2xl bg-white ${
          footer ? "ring-1 ring-white/15" : "ring-1 ring-slate-200"
        }`}
      >
        <Image
          src={LOGO_PATH}
          alt="EduNest logo"
          width={footer ? 56 : 52}
          height={footer ? 56 : 52}
          className="h-12 w-12 object-contain"
        />
      </div>
      <div>
        <div className={`text-xl font-extrabold tracking-tight ${footer ? "text-white" : "text-slate-900"}`}>
          EduNest
        </div>
        <div className={`text-xs font-medium ${footer ? "text-white/70" : "text-slate-500"}`}>
          Home & Online Tuition Platform
        </div>
      </div>
    </div>
  );
}

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left">
        <span className="text-base font-semibold text-slate-900">{q}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? <div className="px-5 pb-5 text-sm leading-7 text-slate-600">{a}</div> : null}
    </div>
  );
}

function FloatingSocials() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 text-white shadow-xl transition hover:-translate-y-0.5"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:-translate-y-0.5"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}

export default function EduNestHomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<FormTab>("student");
  const [parentForm, setParentForm] = useState<ParentFormState>(initialParentForm);
  const [teacherForm, setTeacherForm] = useState<TeacherFormState>(initialTeacherForm);
  const [parentError, setParentError] = useState("");
  const [teacherError, setTeacherError] = useState("");
  const [parentSuccess, setParentSuccess] = useState("");
  const [teacherSuccess, setTeacherSuccess] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isParentSubmitting, setIsParentSubmitting] = useState(false);
  const [isTeacherSubmitting, setIsTeacherSubmitting] = useState(false);

  const stats = useMemo(
    () => [
      { label: "Coverage", value: "Jhansi & Indore" },
      { label: "Levels", value: "Nursery to 12" },
      { label: "Modes", value: "Home + Online" },
      { label: "Exam Prep", value: "CBSE / ICSE / JEE / NEET" },
    ],
    []
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "EduNest",
    url: SITE_URL,
    logo: `${SITE_URL}/edunest-logo.jpeg`,
    description:
      "EduNest helps parents find trusted home tutors and online tutors in Jhansi and Indore for Nursery to Class 12, CBSE, ICSE, Navodaya, Sainik School, IIT-JEE, and NEET preparation.",
    telephone: `+91-${PRIMARY_PHONE}`,
    email: CLIENT_EMAIL,
    areaServed: ["Jhansi", "Indore"],
    sameAs: [INSTAGRAM_URL],
  };

  const handleParentSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setParentError("");
    setParentSuccess("");

    if (
      !parentForm.parentName ||
      !parentForm.phone ||
      !parentForm.studentClass ||
      !parentForm.subject ||
      !parentForm.city ||
      !parentForm.mode
    ) {
      setParentError("Please fill all required student enquiry fields.");
      return;
    }

    if (!isValidPhone(parentForm.phone)) {
      setParentError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (parentForm.whatsapp && !isValidPhone(parentForm.whatsapp)) {
      setParentError("Please enter a valid 10-digit WhatsApp number.");
      return;
    }

    const message = `New Student Enquiry - EduNest

Parent Name: ${parentForm.parentName}
Student Name: ${parentForm.studentName || "Not provided"}
Phone: ${parentForm.phone}
WhatsApp: ${parentForm.whatsapp || "Not provided"}
Class / Program: ${parentForm.studentClass}
Subject / Preparation: ${parentForm.subject}
City: ${parentForm.city}
Area: ${parentForm.area || "Not provided"}
Mode: ${parentForm.mode}
Preferred Tutor Gender: ${parentForm.preferredTutorGender || "No Preference"}
Preferred Timing: ${parentForm.preferredTiming || "Not provided"}
Additional Message: ${parentForm.message || "Not provided"}`;

    try {
      setIsParentSubmitting(true);

      await submitToFormspree(STUDENT_FORMSPREE_ENDPOINT, {
        formType: "Student Enquiry",
        parentName: parentForm.parentName,
        studentName: parentForm.studentName || "",
        phone: parentForm.phone,
        whatsapp: parentForm.whatsapp || "",
        studentClass: parentForm.studentClass,
        subject: parentForm.subject,
        city: parentForm.city,
        area: parentForm.area || "",
        mode: parentForm.mode,
        preferredTutorGender: parentForm.preferredTutorGender || "No Preference",
        preferredTiming: parentForm.preferredTiming || "",
        message: parentForm.message || "",
        whatsappMessage: message,
      });

      setParentSuccess("Your enquiry has been saved successfully. WhatsApp will open now.");
      window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");

      setParentForm(initialParentForm);
    } catch (error) {
      setParentError(
        error instanceof Error
          ? error.message
          : "Something went wrong while saving the form."
      );
    } finally {
      setIsParentSubmitting(false);
    }
  };

  const handleTeacherSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTeacherError("");
    setTeacherSuccess("");

    if (
      !teacherForm.fullName ||
      !teacherForm.phone ||
      !teacherForm.gender ||
      !teacherForm.age ||
      !teacherForm.city ||
      !teacherForm.subjects ||
      !teacherForm.classesTaught ||
      !teacherForm.qualification ||
      !teacherForm.currentProfession ||
      !teacherForm.experience ||
      !teacherForm.mode ||
      !teacherForm.availableTimings
    ) {
      setTeacherError("Please fill all required tutor application fields.");
      return;
    }

    if (!isValidPhone(teacherForm.phone)) {
      setTeacherError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (teacherForm.whatsapp && !isValidPhone(teacherForm.whatsapp)) {
      setTeacherError("Please enter a valid 10-digit WhatsApp number.");
      return;
    }

    const message = `New Tutor Application - EduNest

Full Name: ${teacherForm.fullName}
Phone: ${teacherForm.phone}
WhatsApp: ${teacherForm.whatsapp || "Not provided"}
Gender: ${teacherForm.gender}
Age: ${teacherForm.age}
City: ${teacherForm.city}
Subjects: ${teacherForm.subjects}
Classes Taught: ${teacherForm.classesTaught}
Qualification: ${teacherForm.qualification}
Current Profession: ${teacherForm.currentProfession}
Teaching Experience: ${teacherForm.experience}
Mode: ${teacherForm.mode}
Available Timings: ${teacherForm.availableTimings}
Expected Fee: ${teacherForm.expectedFee || "Not provided"}
Resume: ${
      teacherForm.resumeFileName ||
      "Selected on device / backend storage can be added later"
    }`;

    try {
      setIsTeacherSubmitting(true);

      await submitToFormspree(TUTOR_FORMSPREE_ENDPOINT, {
        formType: "Tutor Application",
        fullName: teacherForm.fullName,
        phone: teacherForm.phone,
        whatsapp: teacherForm.whatsapp || "",
        gender: teacherForm.gender,
        age: teacherForm.age,
        city: teacherForm.city,
        subjects: teacherForm.subjects,
        classesTaught: teacherForm.classesTaught,
        qualification: teacherForm.qualification,
        currentProfession: teacherForm.currentProfession,
        experience: teacherForm.experience,
        mode: teacherForm.mode,
        availableTimings: teacherForm.availableTimings,
        expectedFee: teacherForm.expectedFee || "",
        resumeFileName: teacherForm.resumeFileName || "",
        whatsappMessage: message,
      });

      setTeacherSuccess("Your application has been saved successfully. WhatsApp will open now.");
      window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");

      setTeacherForm(initialTeacherForm);
    } catch (error) {
      setTeacherError(
        error instanceof Error
          ? error.message
          : "Something went wrong while saving the form."
      );
    } finally {
      setIsTeacherSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-slate-900" style={{ background: BRAND.bg }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="shrink-0">
            <EduNestLogo />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              WhatsApp
            </a>
            <a
              href="#lead-forms"
              className="inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
              style={{ background: BRAND.secondary }}
            >
              Find a Tutor
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 text-sm font-semibold text-slate-700"
              >
                WhatsApp
              </a>
              <a
                href="#lead-forms"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-xl text-sm font-semibold text-slate-900"
                style={{ background: BRAND.secondary }}
              >
                Find a Tutor
              </a>
            </div>
          </div>
        ) : null}
      </div>

      <main>
        <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(31,111,178,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,181,71,0.18),_transparent_25%)]" />
          <div className="mx-auto grid max-w-7xl gap-14 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8 lg:pb-24 lg:pt-16">
            <div className="relative z-10 flex flex-col justify-center">
              <SectionBadge>Jhansi & Indore Home & Online Tuition</SectionBadge>

              <h1
                className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                style={{ color: BRAND.text }}
              >
                Find the Right Tutor for Every Stage of Learning
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 sm:text-xl" style={{ color: BRAND.muted }}>
                EduNest helps parents find trusted tutors for home tuition and online classes for{" "}
                <span className="font-semibold text-slate-800">Nursery to Class 12</span>,{" "}
                <span className="font-semibold text-slate-800">CBSE</span>,{" "}
                <span className="font-semibold text-slate-800">ICSE</span>,{" "}
                <span className="font-semibold text-slate-800">Navodaya</span>,{" "}
                <span className="font-semibold text-slate-800">Sainik School</span>,{" "}
                <span className="font-semibold text-slate-800">IIT-JEE</span>,{" "}
                <span className="font-semibold text-slate-800">NEET</span>, and more in{" "}
                <span className="font-semibold text-slate-800">Jhansi</span> and{" "}
                <span className="font-semibold text-slate-800">Indore</span>.
              </p>

              <div
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200"
                style={{ background: BRAND.secondary }}
              >
                <Home className="h-4 w-4" style={{ color: BRAND.text }} />
                Get the best home tutor for your child at your doorstep
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#lead-forms"
                  className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-slate-900 shadow-xl transition hover:-translate-y-0.5"
                  style={{ background: BRAND.secondary }}
                >
                  Find a Tutor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>

                <button
                  onClick={() => {
                    setActiveTab("tutor");
                    document.getElementById("lead-forms")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                >
                  Become a Tutor
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
                  style={{ color: BRAND.primary }}
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>

                <a
                  href={CLIENT_EMAIL ? `mailto:${CLIENT_EMAIL}` : "#"}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
                >
                  <Mail className="h-4 w-4" />
                  {CLIENT_EMAIL}
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Nursery to Class 12",
                  "CBSE / ICSE",
                  "Navodaya / Sainik School",
                  "IIT-JEE / NEET",
                  "Home & Online Tuition",
                ].map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4" style={{ color: BRAND.accent }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex items-start justify-center lg:pt-0">
              <div className="relative flex w-full max-w-2xl flex-col items-center justify-start pt-2">
                <div
                  className="absolute top-12 h-[320px] w-[320px] rounded-full opacity-90 sm:top-10 sm:h-[430px] sm:w-[430px]"
                  style={{
                    background: "linear-gradient(145deg, rgba(31,111,178,0.18), rgba(69,196,176,0.18))",
                  }}
                />
                <div className="absolute top-20 h-[220px] w-[220px] rounded-full border border-white/70 bg-white/40 backdrop-blur-sm sm:top-16 sm:h-[300px] sm:w-[300px]" />

                <div className="absolute -left-2 top-10 hidden rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-slate-200 sm:block">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Trusted Support
                  </div>
                  <div className="mt-1 text-sm font-bold text-slate-900">
                    Parents • Students • Tutors
                  </div>
                </div>

                <div className="absolute z-20 -right-2 bottom-24 hidden rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-slate-200 sm:block">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Coverage
                  </div>
                  <div className="mt-1 text-sm font-bold text-slate-900">Jhansi & Indore</div>
                </div>

                <div className="relative z-10 w-full max-w-[560px]">
                  <Image
                    src={HERO_IMAGE}
                    alt="Student learning with tutor support"
                    width={560}
                    height={640}
                    priority
                    className="h-auto w-full object-contain drop-shadow-[0_24px_40px_rgba(31,111,178,0.18)]"
                  />
                </div>

                <div className="relative z-10 mt-4 grid w-full max-w-[540px] grid-cols-2 gap-3 sm:grid-cols-4">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-white/95 p-3 text-center shadow-md ring-1 ring-slate-200 backdrop-blur transition hover:-translate-y-0.5"
                    >
                      <div className="text-sm font-bold text-slate-900 sm:text-base">{item.value}</div>
                      <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white/80">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 py-5 text-sm font-semibold text-slate-700 sm:px-6 lg:justify-between lg:px-8">
            {[
              "Nursery to Class 12",
              "CBSE & ICSE Support",
              "Navodaya & Sainik School",
              "Home & Online Tuition",
              "Jhansi & Indore Coverage",
            ].map((item) => (
              <div key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" style={{ color: BRAND.accent }} />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>Two Clear Paths</SectionBadge>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Built for Parents and Tutors
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              EduNest is designed to reduce confusion. One platform, two simple journeys.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="inline-flex rounded-2xl p-3" style={{ background: "#E7F1FC", color: BRAND.primary }}>
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">For Parents</h3>
              <p className="mt-3 text-base leading-8 text-slate-600">
                Share your child’s requirement and EduNest will help identify a suitable tutor.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {[
                  "Class, board, and subject based matching",
                  "Home tuition or online tuition",
                  "WhatsApp-friendly communication",
                  "Simple student enquiry form",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BRAND.accent }} />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  setActiveTab("student");
                  document.getElementById("lead-forms")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: BRAND.primary }}
              >
                Find a Tutor <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="inline-flex rounded-2xl p-3" style={{ background: "#FFF1D8", color: "#C98000" }}>
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">For Tutors</h3>
              <p className="mt-3 text-base leading-8 text-slate-600">
                Apply with your teaching profile and start getting opportunities in Jhansi and Indore.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {[
                  "Apply with academic details",
                  "Add subjects, classes, and experience",
                  "Choose home, online, or both",
                  "Resume field included",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BRAND.secondary }} />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  setActiveTab("tutor");
                  document.getElementById("lead-forms")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: BRAND.primary }}
              >
                Become a Tutor <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <SectionBadge>How It Works</SectionBadge>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                A Simple Process for Busy Parents
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Clear and practical lead flow without unnecessary complexity.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {parentSteps.map((item, idx) => (
                <div key={item.step} className="relative rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                  <div className="absolute right-6 top-6 text-4xl font-black text-slate-100">{item.step}</div>
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                      idx === 0
                        ? "bg-blue-100 text-blue-700"
                        : idx === 1
                        ? "bg-teal-100 text-teal-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {idx === 0 ? (
                      <BookOpen className="h-5 w-5" />
                    ) : idx === 1 ? (
                      <Users className="h-5 w-5" />
                    ) : (
                      <Sparkles className="h-5 w-5" />
                    )}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="subjects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionBadge>Subjects Covered</SectionBadge>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Support Across School, Boards, and Competitive Exams
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                EduNest supports students from early classes to advanced exam preparation with a clean tutor-matching approach.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "School tuition from Nursery to Class 12",
                  "CBSE and ICSE board-focused preparation",
                  "Navodaya, Sainik School, Olympiad, IIT-JEE, and NEET support",
                  "Online and home tuition options",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-base text-slate-700">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0" style={{ color: BRAND.accent }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {categories.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold text-slate-900">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm sm:p-10">
                <SectionBadge>Teaching Modes</SectionBadge>
                <h3 className="mt-5 text-3xl font-extrabold text-slate-900">Flexible Learning Options</h3>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    { title: "Home Tuition", text: "One-on-one support at home." },
                    { title: "Online Tuition", text: "Flexible remote learning." },
                    { title: "Both Modes", text: "Choose what fits best." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                      <div className="text-lg font-bold text-slate-900">{item.title}</div>
                      <div className="mt-2 text-sm leading-7 text-slate-600">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-[32px] p-8 text-white shadow-sm sm:p-10"
                style={{ background: `linear-gradient(145deg, ${BRAND.primary}, #1A8AC8)` }}
              >
                <SectionBadge>Cities We Serve</SectionBadge>
                <h3 className="mt-5 text-3xl font-extrabold">Focused Service in Key Cities</h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">
                  EduNest is currently helping parents and tutors connect in two active education markets.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {cities.map((city) => (
                    <div key={city} className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10 backdrop-blur-sm">
                      <div className="text-2xl font-bold">{city}</div>
                      <div className="mt-2 text-sm leading-7 text-white/80">
                        Tutor support across major local areas with home and online options.
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>Why Choose EduNest</SectionBadge>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Designed to Feel Helpful, Clear, and Trustworthy
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Parents want clarity and tutors want a smooth application flow. EduNest supports both.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {parentBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-2xl p-3" style={{ background: "#E7F1FC", color: BRAND.primary }}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-20 text-white" style={{ background: `linear-gradient(145deg, ${BRAND.primary}, #126B99)` }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div>
                <SectionBadge>Competitive & Foundation Support</SectionBadge>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Expert Tutors for CBSE, ICSE, Navodaya, Sainik School, IIT-JEE, and NEET
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
                  Need focused support for school boards, entrance preparation, and serious subject mastery? EduNest also supports advanced tutor matching.
                </p>
                <button
                  onClick={() => {
                    setActiveTab("student");
                    document.getElementById("lead-forms")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-8 inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-slate-900 shadow-xl transition hover:-translate-y-0.5"
                  style={{ background: BRAND.secondary }}
                >
                  Request an Expert Tutor
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "CBSE / ICSE Support",
                  "Navodaya / Sainik School",
                  "IIT-JEE / NEET Preparation",
                  "Board Exam Guidance",
                ].map((item) => (
                  <div key={item} className="rounded-[28px] bg-white/10 p-6 shadow-lg ring-1 ring-white/10 backdrop-blur-sm">
                    <div className="text-lg font-bold">{item}</div>
                    <div className="mt-2 text-sm leading-7 text-white/80">
                      Targeted learning support built around subject strength and exam readiness.
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>Smart Form Features</SectionBadge>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Ready for Online Save, Email, and Future Automation
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Your current website is already a strong base. You can upgrade the form system anytime.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Database,
                title: "Save Form Data Online",
                text: "This version can save student and tutor submissions online using Formspree.",
              },
              {
                icon: Mail,
                title: "Email Ready",
                text: "You can add email notifications later using Formspree, EmailJS, or a custom backend setup.",
              },
              {
                icon: ClipboardList,
                title: "WhatsApp Follow-Up",
                text: "After successful save, WhatsApp opens with a prefilled message for fast manual follow-up.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-2xl p-3" style={{ background: "#E7F1FC", color: BRAND.primary }}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="lead-forms" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>Apply / Enquire</SectionBadge>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              One Section, Two Smart Form Flows
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Default form is for students and parents. Tutor form opens only when selected.
            </p>
          </div>

          <div className="mt-10 rounded-[32px] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                onClick={() => setActiveTab("student")}
                className={`rounded-2xl px-5 py-4 text-left transition ${
                  activeTab === "student" ? "text-slate-900 shadow-lg" : "bg-slate-50 text-slate-600"
                }`}
                style={activeTab === "student" ? { background: BRAND.secondary } : {}}
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em]">Student Enquiry</div>
                <div className="mt-1 text-lg font-bold">Find the right tutor for your child</div>
              </button>

              <button
                onClick={() => setActiveTab("tutor")}
                className={`rounded-2xl px-5 py-4 text-left transition ${
                  activeTab === "tutor" ? "text-white shadow-lg" : "bg-slate-50 text-slate-600"
                }`}
                style={activeTab === "tutor" ? { background: BRAND.primary } : {}}
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em]">Tutor Application</div>
                <div className="mt-1 text-lg font-bold">Apply as a tutor with EduNest</div>
              </button>
            </div>

            {activeTab === "student" ? (
              <div className="mt-8 grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
                <div className="rounded-[28px] bg-slate-50 p-8 ring-1 ring-slate-200 sm:p-10">
                  <SectionBadge>Student / Parent Form</SectionBadge>
                  <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900">
                    Find the Best Tutor for Your Child
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    This form keeps the process simple, saves the lead online, and opens WhatsApp for quick follow-up.
                  </p>
                  <div className="mt-8 space-y-4 text-sm text-slate-700">
                    {[
                      "Fast and mobile-friendly form",
                      "Useful for home and online tuition enquiries",
                      "CBSE, ICSE, Navodaya, and Sainik School support",
                      "Good fit for Jhansi and Indore parent leads",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BRAND.accent }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleParentSubmit} className="rounded-[28px] bg-white p-8 ring-1 ring-slate-200 sm:p-10">
                  <div className="grid gap-5 md:grid-cols-2">
                    <InputField label="Parent Name" required>
                      <CommonInput
                        value={parentForm.parentName}
                        onChange={(e) => setParentForm({ ...parentForm, parentName: e.target.value })}
                        placeholder="Enter parent name"
                      />
                    </InputField>

                    <InputField label="Student Name">
                      <CommonInput
                        value={parentForm.studentName}
                        onChange={(e) => setParentForm({ ...parentForm, studentName: e.target.value })}
                        placeholder="Enter student name"
                      />
                    </InputField>

                    <InputField label="Phone Number" required>
                      <CommonInput
                        inputMode="numeric"
                        maxLength={10}
                        value={parentForm.phone}
                        onChange={(e) =>
                          setParentForm({ ...parentForm, phone: e.target.value.replace(/\D/g, "") })
                        }
                        placeholder="10-digit phone number"
                      />
                    </InputField>

                    <InputField label="WhatsApp Number">
                      <CommonInput
                        inputMode="numeric"
                        maxLength={10}
                        value={parentForm.whatsapp}
                        onChange={(e) =>
                          setParentForm({ ...parentForm, whatsapp: e.target.value.replace(/\D/g, "") })
                        }
                        placeholder="10-digit WhatsApp number"
                      />
                    </InputField>

                    <InputField label="Class / Program" required>
                      <CommonSelect
                        value={parentForm.studentClass}
                        onChange={(e) => setParentForm({ ...parentForm, studentClass: e.target.value })}
                      >
                        <option value="">Select class or program</option>
                        {classOptions.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </CommonSelect>
                    </InputField>

                    <InputField label="Subject / Preparation" required>
                      <CommonSelect
                        value={parentForm.subject}
                        onChange={(e) => setParentForm({ ...parentForm, subject: e.target.value })}
                      >
                        <option value="">Select subject or preparation</option>
                        {subjectOptions.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </CommonSelect>
                    </InputField>

                    <InputField label="City" required>
                      <CommonSelect
                        value={parentForm.city}
                        onChange={(e) => setParentForm({ ...parentForm, city: e.target.value })}
                      >
                        <option value="">Select city</option>
                        {cities.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </CommonSelect>
                    </InputField>

                    <InputField label="Area / Location">
                      <CommonInput
                        value={parentForm.area}
                        onChange={(e) => setParentForm({ ...parentForm, area: e.target.value })}
                        placeholder="Area or locality"
                      />
                    </InputField>

                    <InputField label="Tuition Mode" required>
                      <CommonSelect
                        value={parentForm.mode}
                        onChange={(e) => setParentForm({ ...parentForm, mode: e.target.value })}
                      >
                        <option value="">Select mode</option>
                        {tuitionModes.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </CommonSelect>
                    </InputField>

                    <InputField label="Preferred Tutor Gender">
                      <CommonSelect
                        value={parentForm.preferredTutorGender}
                        onChange={(e) =>
                          setParentForm({ ...parentForm, preferredTutorGender: e.target.value })
                        }
                      >
                        {genderOptions.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </CommonSelect>
                    </InputField>

                    <InputField label="Preferred Timing">
                      <CommonSelect
                        value={parentForm.preferredTiming}
                        onChange={(e) => setParentForm({ ...parentForm, preferredTiming: e.target.value })}
                      >
                        <option value="">Select preferred timing</option>
                        {parentTimings.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </CommonSelect>
                    </InputField>

                    <div className="md:col-span-2">
                      <InputField label="Additional Message">
                        <CommonTextarea
                          value={parentForm.message}
                          onChange={(e) => setParentForm({ ...parentForm, message: e.target.value })}
                          placeholder="Share any extra requirement"
                        />
                      </InputField>
                    </div>
                  </div>

                  {parentError ? <p className="mt-5 text-sm font-medium text-rose-600">{parentError}</p> : null}
                  {parentSuccess ? (
                    <p className="mt-5 text-sm font-medium" style={{ color: BRAND.primary }}>
                      {parentSuccess}
                    </p>
                  ) : null}

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      disabled={isParentSubmitting}
                      className="inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                      style={{ background: BRAND.secondary }}
                    >
                      {isParentSubmitting ? "Saving..." : "Find a Tutor"}
                    </button>

                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>

                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    By submitting this form, you agree to be contacted by EduNest via phone, email, or WhatsApp.
                    Your details are kept private and used only for tutor matching and support.
                  </p>
                </form>
              </div>
            ) : (
              <div className="mt-8 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
                <div
                  className="rounded-[28px] p-8 text-white shadow-sm sm:p-10"
                  style={{ background: `linear-gradient(145deg, ${BRAND.primary}, #1A8AC8)` }}
                >
                  <SectionBadge>Tutor Application</SectionBadge>
                  <h3 className="mt-5 text-3xl font-extrabold tracking-tight">Apply as a Tutor with EduNest</h3>
                  <p className="mt-4 text-base leading-8 text-white/80">
                    Teachers can apply for tutoring opportunities in Jhansi and Indore by sharing profile details, subjects, timings, and experience.
                  </p>
                  <div className="mt-8 space-y-4 text-sm text-white/85">
                    {[
                      "Home tuition, online tuition, or both",
                      "School, board, and exam categories supported",
                      "Simple lead-first application flow",
                      "Good base before full admin panel",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#FFE6A8" }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleTeacherSubmit} className="rounded-[28px] bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
                  <div className="grid gap-5 md:grid-cols-2">
                    <InputField label="Full Name" required>
                      <CommonInput
                        value={teacherForm.fullName}
                        onChange={(e) => setTeacherForm({ ...teacherForm, fullName: e.target.value })}
                        placeholder="Enter full name"
                      />
                    </InputField>

                    <InputField label="Phone Number" required>
                      <CommonInput
                        inputMode="numeric"
                        maxLength={10}
                        value={teacherForm.phone}
                        onChange={(e) =>
                          setTeacherForm({ ...teacherForm, phone: e.target.value.replace(/\D/g, "") })
                        }
                        placeholder="10-digit phone number"
                      />
                    </InputField>

                    <InputField label="WhatsApp Number">
                      <CommonInput
                        inputMode="numeric"
                        maxLength={10}
                        value={teacherForm.whatsapp}
                        onChange={(e) =>
                          setTeacherForm({ ...teacherForm, whatsapp: e.target.value.replace(/\D/g, "") })
                        }
                        placeholder="10-digit WhatsApp number"
                      />
                    </InputField>

                    <InputField label="Gender" required>
                      <CommonSelect
                        value={teacherForm.gender}
                        onChange={(e) => setTeacherForm({ ...teacherForm, gender: e.target.value })}
                      >
                        <option value="">Select gender</option>
                        {teacherGenderOptions.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </CommonSelect>
                    </InputField>

                    <InputField label="Age" required>
                      <CommonInput
                        inputMode="numeric"
                        value={teacherForm.age}
                        onChange={(e) => setTeacherForm({ ...teacherForm, age: e.target.value.replace(/\D/g, "") })}
                        placeholder="Enter age"
                      />
                    </InputField>

                    <InputField label="City" required>
                      <CommonSelect
                        value={teacherForm.city}
                        onChange={(e) => setTeacherForm({ ...teacherForm, city: e.target.value })}
                      >
                        <option value="">Select city</option>
                        {cities.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </CommonSelect>
                    </InputField>

                    <InputField label="Subjects You Teach" required>
                      <CommonInput
                        value={teacherForm.subjects}
                        onChange={(e) => setTeacherForm({ ...teacherForm, subjects: e.target.value })}
                        placeholder="Example: Maths, Physics, CBSE, ICSE"
                      />
                    </InputField>

                    <InputField label="Classes You Teach" required>
                      <CommonInput
                        value={teacherForm.classesTaught}
                        onChange={(e) => setTeacherForm({ ...teacherForm, classesTaught: e.target.value })}
                        placeholder="Example: Class 6 to 12 / Navodaya / Sainik"
                      />
                    </InputField>

                    <InputField label="Qualification" required>
                      <CommonInput
                        value={teacherForm.qualification}
                        onChange={(e) => setTeacherForm({ ...teacherForm, qualification: e.target.value })}
                        placeholder="Example: B.Sc, M.A, B.Tech"
                      />
                    </InputField>

                    <InputField label="Current Profession" required>
                      <CommonInput
                        value={teacherForm.currentProfession}
                        onChange={(e) => setTeacherForm({ ...teacherForm, currentProfession: e.target.value })}
                        placeholder="Example: Full-time tutor, student, teacher"
                      />
                    </InputField>

                    <InputField label="Teaching Experience" required>
                      <CommonInput
                        value={teacherForm.experience}
                        onChange={(e) => setTeacherForm({ ...teacherForm, experience: e.target.value })}
                        placeholder="Example: 3 years"
                      />
                    </InputField>

                    <InputField label="Teaching Mode" required>
                      <CommonSelect
                        value={teacherForm.mode}
                        onChange={(e) => setTeacherForm({ ...teacherForm, mode: e.target.value })}
                      >
                        <option value="">Select mode</option>
                        {tuitionModes.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </CommonSelect>
                    </InputField>

                    <InputField label="Available Timings" required>
                      <CommonSelect
                        value={teacherForm.availableTimings}
                        onChange={(e) => setTeacherForm({ ...teacherForm, availableTimings: e.target.value })}
                      >
                        <option value="">Select available timing</option>
                        {teacherTimingOptions.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </CommonSelect>
                    </InputField>

                    <InputField label="Expected Fee">
                      <CommonInput
                        value={teacherForm.expectedFee}
                        onChange={(e) => setTeacherForm({ ...teacherForm, expectedFee: e.target.value })}
                        placeholder="Optional"
                      />
                    </InputField>

                    <div className="md:col-span-2">
                      <InputField label="Resume Upload">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) =>
                            setTeacherForm({ ...teacherForm, resumeFileName: e.target.files?.[0]?.name || "" })
                          }
                          className="block w-full rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700"
                        />
                        <p className="mt-2 text-xs leading-6 text-slate-500">
                          Frontend resume field is ready. For permanent file storage, connect UploadThing, Cloudinary, or backend storage later.
                        </p>
                      </InputField>
                    </div>
                  </div>

                  {teacherError ? <p className="mt-5 text-sm font-medium text-rose-600">{teacherError}</p> : null}
                  {teacherSuccess ? (
                    <p className="mt-5 text-sm font-medium" style={{ color: BRAND.primary }}>
                      {teacherSuccess}
                    </p>
                  ) : null}

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      disabled={isTeacherSubmitting}
                      className="inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                      style={{ background: BRAND.primary }}
                    >
                      {isTeacherSubmitting ? "Saving..." : "Apply as Tutor"}
                    </button>

                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      WhatsApp EduNest
                    </a>
                  </div>

                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    By submitting this form, you agree to be contacted by EduNest via phone, email, or WhatsApp.
                    Your details are kept private and used only for tutor matching and support.
                  </p>
                </form>
              </div>
            )}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>FAQ</SectionBadge>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Common Questions
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Helpful answers for both parents and teachers before they submit a form.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            {faqItems.map((item, index) => (
              <FaqItem
                key={item.q}
                q={item.q}
                a={item.a}
                open={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div
            className="mx-auto max-w-7xl rounded-[36px] px-8 py-12 text-white shadow-[0_30px_70px_-20px_rgba(31,111,178,0.35)] sm:px-12 sm:py-14"
            style={{ background: `linear-gradient(90deg, ${BRAND.primary}, #1688C6)` }}
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <SectionBadge>Final Call to Action</SectionBadge>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Start Your Child’s Learning Journey with EduNest
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/80">
                  Whether you are a parent looking for the right tutor or a teacher ready to apply, EduNest keeps the first step simple.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => {
                    setActiveTab("student");
                    document.getElementById("lead-forms")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
                  style={{ background: BRAND.secondary }}
                >
                  Find a Tutor
                </button>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200" style={{ background: `linear-gradient(180deg, #0F4C5C, #0C3552)` }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:px-8">
          <div>
            <EduNestLogo footer />
            <p className="mt-5 max-w-md text-base leading-8 text-white/70">
              EduNest is a home tuition platform connecting parents and tutors through a simple, modern, and lead-focused website experience.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">Quick Links</h3>
            <div className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-medium text-white/70 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">Contact</h3>
            <div className="mt-5 space-y-4 text-sm text-white/70">
              <a href={`tel:${PRIMARY_PHONE}`} className="flex items-center gap-3 transition hover:text-white">
                <Phone className="h-4 w-4" /> EduNest: {PRIMARY_PHONE}
              </a>
              <a href={`tel:${SECONDARY_PHONE}`} className="flex items-center gap-3 transition hover:text-white">
                <Phone className="h-4 w-4" /> {SECONDARY_CONTACT_NAME}: {SECONDARY_PHONE}
              </a>
              <a
                href={`mailto:${CLIENT_EMAIL}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail className="h-4 w-4" /> {CLIENT_EMAIL}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4" /> <span>Serving Jhansi and Indore</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/50 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} EduNest. All rights reserved. Designed & Developed by{" "}
          <a
            href="https://rewantechsolutions.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-white/70 transition hover:text-white"
          >
            Rewan Tech Solutions
          </a>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 z-40 flex gap-3 lg:hidden">
        <button
          onClick={() => {
            setActiveTab("student");
            document.getElementById("lead-forms")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex h-12 items-center justify-center rounded-2xl px-5 text-sm font-semibold text-slate-900 shadow-xl"
          style={{ background: BRAND.secondary }}
        >
          Find Tutor
        </button>
      </div>

      <FloatingSocials />
    </div>
  );
}