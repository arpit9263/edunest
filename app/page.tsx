"use client";

import { Baloo_2, Inter } from "next/font/google";
import React, { FormEvent, useMemo, useState, useRef, useEffect } from "react";
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
  Star,

  Monitor, List, Pencil,
  ChevronRight,


  Trophy,

  CheckCircle,

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

const headingFont = Baloo_2({ subsets: ["latin"], weight: ["600", "700", "800"] });
const bodyFont = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

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
  "All Subjects",
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
const budgetOptions = [
  "₹1000+",
  "₹1500+",
  "₹2000+",
  "₹2500+",
  "₹3000+",
  "₹4000+",
  "₹5000+",
  "Flexible",
];
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
    text: "No complicated marketplace logic. Just fill the form and EDUNEST follows up directly.",
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
    text: "Tell EDUNEST the class, board, subject, city, tuition mode, and preferred timing.",
    style: BRAND.secondary,
  },
  {
    step: "02",
    title: "Get the Right Match",
    text: "The team reviews the requirement and identifies a suitable tutor profile.",
    style: 'lightpink',


  },
  {
    step: "03",
    title: "Start the Learning Journey",
    text: "Proceed with demo or discussion and move ahead with the selected tutor.",
    style: BRAND.accent,

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

// const overallStats = [
//   { value: "1200+", label: "Parent Enquiries" },
//   { value: "350+", label: "Active Tutors" },
//   { value: "2", label: "Cities Covered" },
//   { value: "15+", label: "Subjects & Programs" },
// ];

const reviewItems = [
  {
    name: "Pooja Sharma",
    role: "Parent, Jhansi",
    text: "The process felt simple and fast. We shared our requirement and got a relevant tutor option without wasting time.",
  },
  {
    name: "Rohit Verma",
    role: "Parent, Indore",
    text: "Good communication, clear process, and a better experience than random tutor listing websites.",
  },
  {
    name: "Anjali Singh",
    role: "Tutor, Jhansi",
    text: "The form was easy to fill and the EDUNEST team followed up properly. Clean and practical platform.",
  },
];

const reviewMarqueeItems = [...reviewItems, ...reviewItems];

const faqItems = [
  {
    q: "How are Tutors Selected?",
    a: "EDUNEST has a simple vetting process where we review tutor applications based on qualifications, experience, subjects taught, and location. We also check for basic trust factors like valid ID, educational certificates, and teaching experience before recommending them to parents.",
  },
  {
    q: "How does EDUNEST work?",
    a: "Parents submit their requirement and EDUNEST connects them with a suitable tutor based on subject, class, board, city, timing, and mode.",
  },
  {
    q: "Do you provide home tuition and online tuition?",
    a: "Yes. EDUNEST supports home tuition, online tuition, and both options depending on the requirement.",
  },
  {
    q: "Which classes and subjects are covered?",
    a: "We support Nursery to Class 12, major school subjects, and also CBSE, ICSE, Navodaya, Sainik School, IIT-JEE, NEET, Olympiad, and selected skill-based learning support.",
  },
  {
    q: "Do you provide tutors for CBSE and ICSE boards?",
    a: "Yes. EDUNEST supports tutor matching for CBSE and ICSE students across school classes and board exam preparation.",
  },
  {
    q: "Do you provide preparation support for Navodaya and Sainik School exams?",
    a: "Yes. EDUNEST also supports tutor requirements for Navodaya and Sainik School preparation depending on city, timing, and tutor availability.",
  },
  {
    q: "Can tutors apply from Jhansi and Indore?",
    a: "Yes. Teachers can apply through the tutor form by submitting profile details, subjects, experience, timings, and resume information.",
  },
  {
    q: "How is contact handled after submission?",
    a: "The form currently saves data online and then opens a prefilled WhatsApp message so the EDUNEST team can receive the lead quickly and follow up directly.",
  },
  {
    q: "Can form data also be saved online or sent to email?",
    a: "Yes. This version supports online saving through Formspree. Email sending can also be added using Formspree, EmailJS, or a custom backend.",
  },
  {
    q: "Do you show tutors publicly on the website?",
    a: "Not right now. EDUNEST currently follows a lead-based matching model instead of a public tutor listing system.",
  },
  {
    q: "What If I am not satisfied?",
    a: "NO Worry's We Provide Quick Tutor Replacement if you are not satisfied with the tutor. Just Contact us on WhatsApp or Call us and we will provide you with another tutor option as soon as possible.",
  },
];

type ParentFormState = {
  parentName: string;
  studentName: string;
  schoolName: string;
  phone: string;
  whatsapp: string;
  studentClass: string;
  subject: string;
  city: string;
  area: string;
  mode: string;
  minBudget: string;
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
  schoolName: "",
  phone: "",
  whatsapp: "",
  studentClass: "",
  subject: "",
  city: "",
  area: "",
  mode: "",
  minBudget: "",
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

function CountUp({
  end,
  duration = 1800,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setStart(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, end, duration]);

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  );
}

const overallStats = [
  { value: 1200, label: "Students Helped", suffix: "+" },
  { value: 420, label: "Trusted Tutors", suffix: "+" },
  { value: 98, label: "Parent Satisfaction", suffix: "%" },
  { value: 24, label: "Support Availability", suffix: "/7" },
];

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
      className={`h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-blue-100 ${props.className ?? ""
        }`}
      style={{ borderColor: "#DDE6F2" }}
    />
  );
}

function CommonSelect(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:ring-4 focus:ring-blue-100 ${props.className ?? ""
        }`}
      style={{ borderColor: "#DDE6F2" }}
    />
  );
}

function CommonTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`min-h-[120px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-blue-100 ${props.className ?? ""
        }`}
      style={{ borderColor: "#DDE6F2" }}
    />
  );
}

function EduNestLogo({ footer = false }: { footer?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`relative overflow-hidden rounded-2xl bg-white ${footer ? "ring-1 ring-white/15" : "ring-1 ring-slate-200"
          }`}
      >
        <Image
          src={LOGO_PATH}
          alt="EDUNEST logo"
          width={footer ? 56 : 52}
          height={footer ? 56 : 52}
          className="h-12 w-12 object-contain"
        />
      </div>
      <div>
        <div className={`${headingFont.className} text-xl font-extrabold tracking-tight ${footer ? "text-white" : "text-slate-900"}`}>
          EDUNEST
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

function SubjectsTabs() {
  const [activeSubjectTab, setActiveSubjectTab] = useState<"school" | "boards" | "exams">("school");

  const tabData = {
    school: {
      title: "School Learning",
      subtitle: "Core subjects for regular class support.",
      items: ["Maths", "Science", "English", "Hindi", "Social Studies", "Computer"],
    },
    boards: {
      title: "Board Preparation",
      subtitle: "Focused subject support for stronger exam performance.",
      items: ["CBSE", "ICSE", "Class 10 Boards", "Class 12 Boards", "Revision Support", "Exam Strategy"],
    },
    exams: {
      title: "Competitive Exams",
      subtitle: "Targeted preparation for entrance and foundation exams.",
      items: ["IIT-JEE", "NEET", "Navodaya", "Sainik School", "Olympiad", "Foundation Prep"],
    },
  } as const;

  const currentTab = tabData[activeSubjectTab];

  return (
    <div className="bg-[#F8FBFF] p-5 sm:p-6 lg:p-8">
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-5">
          {[
            { key: "school", label: "School" },
            { key: "boards", label: "Boards" },
            { key: "exams", label: "Competitive Exams" },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveSubjectTab(tab.key as "school" | "boards" | "exams")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeSubjectTab === tab.key
                ? "text-white shadow-sm"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
                }`}
              style={activeSubjectTab === tab.key ? { background: BRAND.primary } : {}}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-4 sm:p-5">
          <h3 className={`${headingFont.className} text-2xl font-extrabold text-slate-900`}>
            {currentTab.title}
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
            {currentTab.subtitle}
          </p>

          <div className="mt-5 rounded-[22px] border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-wrap gap-2">
              {currentTab.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-slate-200 bg-white">
          {[
            { value: "12+", label: "School Levels" },
            { value: "10+", label: "Core Subjects" },
            { value: "Exam", label: "Focused Prep" },
          ].map((item, index) => (
            <div
              key={item.label}
              className={`px-4 py-5 text-center ${index !== 2 ? "border-r border-slate-200" : ""}`}
            >
              <div className={`${headingFont.className} text-2xl font-extrabold text-slate-900`}>
                {item.value}
              </div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-xs">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
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

  // const stats = useMemo(
  //   () => [
  //     { label: "Trusted Reach", value: "Jhansi & Indore" },
  //     { label: "Academic Levels", value: "Nursery to 12" },
  //     { label: "Learning Modes", value: "Home + Online" },
  //     { label: "Top Programs", value: "Boards + JEE + NEET" },
  //   ],
  //   []
  // );

  // ─── STATS DATA ──────────────────────────────────────────────────────────────
  const stats = [
    { value: "Jhansi & Indore", label: "Trusted Reach", icon: MapPin, color: "#60A5FA" },
    { value: "Nursery–12", label: "Academic Levels", icon: GraduationCap, color: "#A78BFA" },
    { value: "Home + Online", label: "Learning Modes", icon: Home, color: "#34D399" },
    { value: "JEE + NEET", label: "Top Programs", icon: Trophy, color: "#FBBF24" },
  ];


  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "EDUNEST",
    url: SITE_URL,
    logo: `${SITE_URL}/edunest-logo.jpeg`,
    description:
      "EDUNEST helps parents find trusted home tutors and online tutors in Jhansi and Indore for Nursery to Class 12, CBSE, ICSE, Navodaya, Sainik School, IIT-JEE, and NEET preparation.",
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

    const message = `New Student Enquiry - EDUNEST

Parent Name: ${parentForm.parentName}
Student Name: ${parentForm.studentName || "Not provided"}
School Name: ${parentForm.schoolName || "Not provided"}
Phone: ${parentForm.phone}
WhatsApp: ${parentForm.whatsapp || "Not provided"}
Class / Program: ${parentForm.studentClass}
Subject / Preparation: ${parentForm.subject}
City: ${parentForm.city}
Area: ${parentForm.area || "Not provided"}
Mode: ${parentForm.mode}
Preferred Tutor Gender: ${parentForm.preferredTutorGender || "No Preference"}
Preferred Timing: ${parentForm.preferredTiming || "Not provided"}
Minimum Budget: ${parentForm.minBudget || "Not provided"}
Additional Message: ${parentForm.message || "Not provided"}`;

    try {
      setIsParentSubmitting(true);

      await submitToFormspree(STUDENT_FORMSPREE_ENDPOINT, {
        formType: "Student Enquiry",
        parentName: parentForm.parentName,
        studentName: parentForm.studentName || "",
        schoolName: parentForm.schoolName || "",
        phone: parentForm.phone,
        whatsapp: parentForm.whatsapp || "",
        studentClass: parentForm.studentClass,
        subject: parentForm.subject,
        city: parentForm.city,
        area: parentForm.area || "",
        mode: parentForm.mode,
        preferredTutorGender: parentForm.preferredTutorGender || "No Preference",
        preferredTiming: parentForm.preferredTiming || "",
        minBudget: parentForm.minBudget || "",
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

    const message = `New Tutor Application - EDUNEST

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
Expected Fee: ${teacherForm.expectedFee || "Not provided"}`;

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


  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const trustAvatars = [
    { initials: "R", bg: "#3B82F6" },
    { initials: "P", bg: "#8B5CF6" },
    { initials: "S", bg: "#10B981" },
    { initials: "A", bg: "#F59E0B" },
  ];


  return (
    <div className={`${bodyFont.className} min-h-screen text-slate-900`} style={{ background: BRAND.bg }}>
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


        {/* New Hero section  */}

        <section
          id="home"
          className="relative overflow-hidden pt-28 sm:pt-32"
          style={{ background: "linear-gradient(135deg, #F0F7FF 0%, #EEF2FF 50%, #FFF8ED 100%)" }}
        >
          {/* ── Ambient blobs ── */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(circle at 8% 20%, rgba(31,111,178,0.13) 0%, transparent 38%)," +
                "radial-gradient(circle at 90% 80%, rgba(255,181,71,0.18) 0%, transparent 32%)," +
                "radial-gradient(circle at 60% 10%, rgba(139,92,246,0.07) 0%, transparent 28%)",
            }}
          />

          {/* ── Subtle dot grid ── */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(circle, #1F6FB2 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="mx-auto grid max-w-7xl gap-14 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8 lg:pb-24 lg:pt-16">

            {/* ══════════════════ LEFT COLUMN ══════════════════ */}
            <div
              className="relative z-10 flex flex-col justify-center"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              {/* Badge */}
              <div className="mb-6 w-fit">
                <span
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
                  style={{
                    background: "rgba(31,111,178,0.08)",
                    borderColor: "rgba(31,111,178,0.22)",
                    color: BRAND.primary,
                  }}
                >
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{
                      background: BRAND.primary,
                      animation: "pulse 2s infinite",
                    }}
                  />
                  Jhansi & Indore — Home & Online Tuition
                </span>
              </div>

              {/* Headline */}
              <h1
                className={`${headingFont.className} max-w-2xl text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]`}
                style={{ color: BRAND.text }}
              >
                Find the Right Tutor{" "}
                <span className="relative inline-block">
                  <span
                    style={{
                      background: `linear-gradient(135deg, ${BRAND.primary}, #7C3AED)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    for Every Stage
                  </span>
                  {/* underline squiggle accent */}
                  <span
                    className="absolute -bottom-1 left-0 h-0.75 w-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${BRAND.primary}, #7C3AED)`,
                      opacity: 0.35,
                    }}
                  />
                </span>{" "}
                of Learning
              </h1>

              {/* Description */}
              <p
                className="mt-6 max-w-xl text-base leading-7 sm:text-lg"
                style={{ color: BRAND.muted }}
              >
                EDUNEST connects parents with trusted tutors for home & online classes —{" "}
                <strong className="font-semibold text-slate-800">Nursery to Class 12</strong>,{" "}
                CBSE, ICSE,{" "}
                <strong className="font-semibold text-slate-800">IIT-JEE, NEET</strong>,
                Navodaya, Sainik School and more in{" "}
                <strong className="font-semibold text-slate-800">Jhansi</strong> and{" "}
                <strong className="font-semibold text-slate-800">Indore</strong>.
              </p>

              {/* Doorstep highlight chip */}
              <div className="mt-5 inline-flex w-fit items-center gap-2.5 rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-lg"
                style={{ background: `linear-gradient(135deg, ${BRAND.primary}, #1688C6)` }}
              >
                <Home className="h-4 w-4 shrink-0" />
                Get the best home tutor for your child at your doorstep
                <Sparkles className="h-3.5 w-3.5 opacity-80" />
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#lead-forms"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-base font-bold text-slate-900 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: BRAND.secondary }}
                >
                  Find a Tutor
                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>

                <button
                  onClick={() => {
                    setActiveTab?.("tutor");
                    document.getElementById("lead-forms")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5"
                  style={{ borderColor: "#E2E8F0" }}
                >
                  Become a Tutor
                  <ChevronRight className="h-4 w-4 opacity-50 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </div>

              {/* Trust row */}
              <div className="mt-7 flex items-center gap-4">
                <div className="flex items-center">
                  {trustAvatars.map((av, i) => (
                    <div
                      key={i}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white"
                      style={{
                        background: av.bg,
                        marginLeft: i === 0 ? 0 : -8,
                      }}
                    >
                      {av.initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500">
                    <span className="font-semibold text-slate-800">500+ families</span> trust EDUNEST
                  </p>
                </div>
              </div>

              {/* Contact strip */}
              <div
                className="mt-6 flex w-fit flex-wrap items-center gap-2 rounded-2xl border px-4 py-2.5"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  borderColor: "#E2E8F0",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  Reach us
                </span>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50"
                  style={{ borderColor: "#E2E8F0" }}
                >
                  <MessageCircle className="h-3.5 w-3.5 text-green-500" />
                  WhatsApp
                </a>

                <a
                  href={CLIENT_EMAIL ? `mailto:${CLIENT_EMAIL}` : "#"}
                  className="inline-flex items-center gap-1.5 rounded-xl border bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50"
                  style={{ borderColor: "#E2E8F0" }}
                >
                  <Mail className="h-3.5 w-3.5" style={{ color: BRAND.primary }} />
                  Gmail
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50"
                  style={{ borderColor: "#E2E8F0" }}
                >
                  <Instagram className="h-3.5 w-3.5 text-pink-500" />
                  Instagram
                </a>
              </div>
            </div>

            {/* ══════════════════ RIGHT COLUMN ══════════════════ */}
            <div
              className="relative z-10 flex items-start justify-center lg:pt-0"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
              }}
            >
              <div className="relative flex w-full max-w-2xl flex-col items-center justify-start pt-2">

                {/* Circular ambient glow behind image */}
                <div
                  className="absolute top-12 h-20 w-[320px] rounded-full opacity-90 sm:top-10 sm:h-107.5 sm:w-107.5"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(31,111,178,0.18), rgba(69,196,176,0.18))",
                  }}
                />
                <div className="absolute top-20 h-13.75 w-13.75 rounded-full border border-white/70 bg-white/40 backdrop-blur-sm sm:top-16 sm:h-[300px] sm:w-[300px]" />

                {/* Floating "Trusted Support" chip — top left */}
                <div className="absolute -left-10 top-10 hidden rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-slate-200 sm:block">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Trusted Support
                    </p>
                  </div>
                  <p className="mt-1 text-sm font-bold text-slate-900">
                    Parents • Students • Tutors
                  </p>
                </div>

                {/* Floating satisfaction chip — bottom right of image */}
                {/* <div
              className="absolute -right-4 bottom-48 z-20 hidden rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-slate-200 sm:block"
            >
              <div className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Satisfaction
                </p>
              </div>
              <p className="mt-1 text-sm font-bold text-slate-900">98% Happy Parents</p>
            </div> */}

                {/* Hero image */}
                <div className="relative z-10 w-full max-w-140">
                  <Image
                    src={HERO_IMAGE}
                    alt="Student learning with tutor support"
                    width={560}
                    height={640}
                    priority
                    className="h-auto w-full object-contain drop-shadow-[0_24px_40px_rgba(31,111,178,0.22)]"
                  />
                </div>

                {/* ── Stats grid card ── */}
                <div
                  className="relative z-10 mt-4 w-full max-w-135 overflow-hidden rounded-[28px] p-0.5 shadow-[0_24px_55px_-20px_rgba(31,111,178,0.65)]"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.primary}, #1688C6, #0F4C81)`,
                  }}
                >
                  {/* Inner card */}
                  <div
                    className="rounded-[26px] p-4 sm:p-5"
                    style={{ background: `linear-gradient(145deg, #1F6FB2, #1357A0)` }}
                  >
                    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[18px]">
                      {stats.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.label}
                            className="relative flex flex-col items-center justify-center px-4 py-5 text-center sm:px-6"
                            style={{
                              background: "rgba(255,255,255,0.06)",
                              borderRight: idx % 2 === 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
                              borderBottom: idx < 2 ? "1px solid rgba(255,255,255,0.12)" : "none",
                            }}
                          >
                            {/* Icon circle */}
                            <div
                              className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl"
                              style={{ background: `${item.color}22`, border: `1px solid ${item.color}44` }}
                            >
                              <Icon className="h-4 w-4" style={{ color: item.color }} />
                            </div>
                            <p
                              className={`${headingFont.className} text-xl font-extrabold leading-tight text-white sm:text-2xl`}
                            >
                              {item.value}
                            </p>
                            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60 sm:text-[11px]">
                              {item.label}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Bottom row: quick trust signals */}
                    <div className="mt-3 flex items-center justify-center gap-4 px-2">
                      {[
                        { icon: BookOpen, label: "CBSE / ICSE" },
                        { icon: Trophy, label: "IIT-JEE / NEET" },
                        { icon: Star, label: "Top Rated Tutors" },
                      ].map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-1.5">
                          <Icon className="h-3 w-3 text-white/50" />
                          <span className="text-[10px] font-medium text-white/60">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Keyframe for pulse dot */}
          <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
        </section>
        {/* old hero section */}
        {/* <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(31,111,178,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,181,71,0.18),_transparent_25%)]" />
          <div className="mx-auto grid max-w-7xl gap-14 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8 lg:pb-24 lg:pt-16">
            <div className="relative z-10 flex flex-col justify-center">
              <SectionBadge>Jhansi & Indore Home & Online Tuition</SectionBadge>

              <h1
                className={`${headingFont.className} mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl`}
                style={{ color: BRAND.text }}
              >
                Find the Right Tutor for Every Stage of Learning
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 sm:text-xl" style={{ color: BRAND.muted }}>
                EDUNEST helps parents find trusted tutors for home tuition and online classes for{" "}
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
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-lg"
                style={{ background: `linear-gradient(135deg, ${BRAND.primary}, #1688C6)` }}
              >
                <Home className="h-4 w-4" />
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

                <div className="absolute -left-10 top-10 hidden rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-slate-200 sm:block">
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

                <div className="relative z-10 mt-4 w-full max-w-[540px] rounded-[28px] bg-[#1F6FB2] p-4 text-white shadow-[0_24px_55px_-20px_rgba(31,111,178,0.65)] sm:p-6">
                  <div className="grid grid-cols-2 divide-x divide-y divide-white/20 overflow-hidden rounded-[20px] border border-white/10">
                    {stats.map((item) => (
                      <div key={item.label} className="px-4 py-5 text-center sm:px-6">
                        <div className={`${headingFont.className} text-2xl font-extrabold sm:text-3xl`}>{item.value}</div>
                        <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80 sm:text-xs">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="hidden border-y border-slate-200 bg-white/80 md:block">
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
            <h2 className={`${headingFont.className} mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl`}>
              Built for Parents and Tutors
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              EDUNEST is designed to reduce confusion. One platform, two simple journeys.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="inline-flex rounded-2xl p-3" style={{ background: "#E7F1FC", color: BRAND.primary }}>
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">For Parents</h3>
              <p className="mt-3 text-base leading-8 text-slate-600">
                Share your child’s requirement and EDUNEST will help identify a suitable tutor.
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
                  "Simple application flow",
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
              <h2 className={`${headingFont.className} mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl`}>
                A Simple Process for Busy Parents
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Clear and practical lead flow without unnecessary complexity.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {parentSteps.map((item, idx) => (
                <div key={item.step} className="relative rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm" style={{ background: item.style }}>
                  <div className="absolute right-6 top-6 text-4xl font-black text-slate-100">{item.step}</div>
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${idx === 0
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

        <section id="subjects" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
              <div className="relative border-b border-slate-200 bg-gradient-to-br from-white via-[#F8FBFF] to-[#EEF6FF] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#DCEEFF] blur-3xl" />
                <div className="relative">
                  <SectionBadge>Subjects Covered</SectionBadge>

                  <h2
                    className={`${headingFont.className} mt-4 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl`}
                  >
                    School, Boards & Exams — All in One Place
                  </h2>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
                    Complete academic support from Nursery to competitive exams with trusted tutors.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {[
                      "Nursery to Class 12",
                      "Home + Online Tuition",
                      "Boards + Entrance Support",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  {/* 
                  <div className="mt-6 space-y-3">
                    {[
                      "Nursery to Class 12",
                      "CBSE & ICSE Boards",
                      "JEE, NEET & Olympiad",
                      "Home + Online Options",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                      >
                        <div
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                          style={{ background: "#EAF4FF" }}
                        >
                          <CheckCircle2 className="h-4 w-4" style={{ color: BRAND.primary }} />
                        </div>
                        <p className="text-sm font-medium text-slate-700 sm:text-base">{item}</p>
                      </div>
                    ))}
                  </div> */}

                  <div
                    className="mt-6 rounded-[20px] px-4 py-3 text-sm font-semibold text-white shadow-lg sm:text-base"
                    style={{ background: `linear-gradient(135deg, ${BRAND.primary}, #2F86D1)` }}
                  >
                    Perfect for parents looking for reliable tutors
                  </div>
                </div>
              </div>

              <SubjectsTabs />
            </div>
          </div>
        </section>

        {/* <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm sm:p-10">
                <SectionBadge>Teaching Modes</SectionBadge>
                <h3 className={`${headingFont.className} mt-5 text-3xl font-extrabold text-slate-900`}>Flexible Learning Options</h3>
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
                  EDUNEST is currently helping parents and tutors connect in two active education markets.
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
        </section> */}

        <section className="py-[72px] px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-[18px] lg:grid-cols-2">

              {/* ── LEFT: Teaching Modes ── */}
              <div className="flex flex-col overflow-hidden rounded-[28px] border border-[#E8EDF4] bg-white">

                {/* Top content */}
                <div className="flex-1 p-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C5DAFD] bg-[#EBF3FE] px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-widest text-[#1356A8]">
                    <Pencil size={11} strokeWidth={2.5} />
                    Teaching Modes
                  </span>

                  <h3 className={`${headingFont.className} mt-3.5 text-[26px] font-extrabold leading-[1.18] tracking-tight text-[#0A1628]`}>
                    Learn Your Way,<br />On Your Terms
                  </h3>

                  <div className="mt-7 flex flex-col">
                    {[
                      {
                        icon: <Home size={20} strokeWidth={2} className="text-[#1356A8]" />,
                        bg: "bg-[#EBF3FE]",
                        title: "Home Tuition",
                        desc: "Expert tutors come to you — personalized, one-on-one sessions at home.",
                      },
                      {
                        icon: <Monitor size={20} strokeWidth={2} className="text-[#0F9469]" />,
                        bg: "bg-[#E8F8F2]",
                        title: "Online Tuition",
                        desc: "Flexible live sessions from anywhere — same quality, zero commute.",
                      },
                      {
                        icon: <List size={20} strokeWidth={2} className="text-[#6B3FBF]" />,
                        bg: "bg-[#F3EFFE]",
                        title: "Hybrid (Both)",
                        desc: "Mix home and online — full flexibility to suit your schedule.",
                      },
                    ].map((item, i, arr) => (
                      <div
                        key={item.title}
                        className={`group flex cursor-default items-center gap-[18px] py-[18px] ${i < arr.length - 1 ? "border-b border-[#F0F2F6]" : ""}`}
                        onClick={() => {
                          setActiveTab("student");
                          document.getElementById("lead-forms")?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <div className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[14px] ${item.bg}`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className={`${headingFont.className} mb-[3px] text-[14px] font-bold text-[#0A1628]`}>{item.title}</div>
                          <div className="text-[12.5px] font-light leading-relaxed text-[#8592a6]">{item.desc}</div>
                        </div>
                        <ArrowRight size={16} strokeWidth={2} className="shrink-0 text-[#C5CDD9]" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats strip */}
                {/* <div className="flex border-t border-[#EEF1F7] bg-[#F7F9FC]">
          {[
            { num: "500+", label: "Verified Tutors" },
            { num: "3K+", label: "Students" },
            { num: "98%", label: "Satisfaction" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`flex-1 py-5 text-center ${i > 0 ? "border-l border-[#E5E8EF]" : ""}`}
            >
              <div className={`${headingFont.className} text-[22px] font-extrabold text-[#1356A8]`}>{s.num}</div>
              <div className="mt-0.5 text-[11px] tracking-[0.01em] text-[#9AA4B5]">{s.label}</div>
            </div>
          ))}
        </div> */}
              </div>

              {/* ── RIGHT: Cities ── */}
              <div
                className="relative flex flex-col overflow-hidden rounded-[28px] p-10"
                style={{ background: "linear-gradient(150deg, #0F52BA 0%, #1278C8 55%, #009FD4 100%)" }}
              >
                {/* Blobs */}
                <div className="pointer-events-none absolute -bottom-20 -left-14 h-64 w-64 rounded-full bg-white/[0.06]" />
                <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/[0.05]" />

                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-widest text-white">
                  <MapPin size={11} strokeWidth={2.5} />
                  Cities We Serve
                </span>

                <h3 className={`${headingFont.className} mt-3.5 text-[26px] font-extrabold leading-[1.18] tracking-tight text-white`}>
                  Where We're<br />Making an Impact
                </h3>
                <p className="mb-7 mt-2 text-[13px] font-light leading-relaxed text-white/65">
                  Connecting parents with the right tutors in Jhansi and Indore — two of India’s growing education hubs
                </p>

                <div className="grid flex-1 grid-cols-2 gap-3.5">
                  {cities.map((city) => (
                    <div
                      key={city}
                      className="rounded-[20px] border border-white/[0.17] bg-white/[0.11] p-6 transition-colors hover:bg-white/[0.18]"
                    >
                      <div className="mb-3 flex items-center gap-1.5">
                        <MapPin size={13} strokeWidth={2.5} className="text-white/55" />
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/50">Active</span>
                      </div>
                      <div className={`${headingFont.className} mb-2 text-[23px] font-extrabold tracking-tight text-white`}>{city}</div>
                      <div className="text-[12px] font-light leading-relaxed text-white/60">
                        Full coverage with home & online tutor options.
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {["Home", "Online", "Hybrid"].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/15 bg-white/[0.13] px-2.5 py-[3px] text-[10px] font-medium text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
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
            <SectionBadge>Why Choose EDUNEST</SectionBadge>
            <h2 className={`${headingFont.className} mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl`}>
              Designed to Feel Helpful, Clear, and Trustworthy
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Parents want clarity and tutors want a smooth application flow. EDUNEST supports both.
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

        <section className="hidden py-20 text-white md:block" style={{ background: `linear-gradient(145deg, ${BRAND.primary}, #126B99)` }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div>
                <SectionBadge>Competitive & Foundation Support</SectionBadge>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Expert Tutors for CBSE, ICSE, Navodaya, Sainik School, IIT-JEE, and NEET
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
                  Need focused support for school boards, entrance preparation, and serious subject mastery? EDUNEST also supports advanced tutor matching.
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

        <section className="mx-auto hidden max-w-7xl px-4 py-20 sm:px-6 lg:block lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>Smart Form Features</SectionBadge>
            <h2 className={`${headingFont.className} mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl`}>
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

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <SectionBadge>Overall Platform Highlights</SectionBadge>
              <h2 className={`${headingFont.className} mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl`}>
                Clean, Trust-Building Numbers That Make the Website Feel Stronger
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Added in a cleaner style inspired by the reference you shared, but more premium and better balanced for EDUNEST.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-5xl rounded-[32px] bg-[#1F6FB2] p-5 text-white shadow-[0_30px_70px_-25px_rgba(31,111,178,0.65)] sm:p-7">
              <div className="grid grid-cols-2 divide-x divide-y divide-white/20 overflow-hidden rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-sm md:grid-cols-4 md:divide-y-0">
                {overallStats.map((item) => (
                  <div key={item.label} className="px-4 py-6 text-center sm:px-6">
                    <div className={`${headingFont.className} text-3xl font-extrabold sm:text-4xl`}>
                      <CountUp end={item.value} suffix={item.suffix || ""} />
                    </div>
                    <div className="mt-2 text-sm font-medium text-white/80">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <SectionBadge>Parent & Tutor Reviews</SectionBadge>
              <h2 className={`${headingFont.className} mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl`}>
                Trust Starts With Real Experience
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                A review section makes the website feel more genuine and helps convert better.
              </p>
            </div>

            <div className="mt-12 relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-slate-50 to-transparent sm:w-20" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-slate-50 to-transparent sm:w-20" />

              <div className="review-marquee flex w-max gap-6 hover:[animation-play-state:paused]">
                {reviewMarqueeItems.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="w-[285px] shrink-0 rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[340px] lg:w-[380px]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-1 text-amber-500">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star key={starIndex} className="h-4 w-4 fill-current" />
                        ))}
                      </div>

                      <span
                        className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
                        style={{ background: "#EAF4FF", color: BRAND.primary }}
                      >
                        Verified Review
                      </span>
                    </div>

                    <p className="mt-5 text-base leading-8 text-slate-600">“{item.text}”</p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <div className={`${headingFont.className} text-lg font-bold text-slate-900`}>
                        {item.name}
                      </div>
                      <div className="text-sm text-slate-500">{item.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="lead-forms" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" >
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>Apply / Enquire</SectionBadge>
            <h2 className={`${headingFont.className} mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl`}>
              One Section, Two Smart Form Flows
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Default form is for students and parents. Tutor form opens only when selected.
            </p>
          </div>

          <div className="mt-10 rounded-[32px] border border-slate-200 bg-white p-4 shadow-sm sm:p-6" >
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                onClick={() => setActiveTab("student")}
                className={`rounded-2xl px-5 py-4 text-left transition ${activeTab === "student" ? "text-slate-900 shadow-lg" : "bg-slate-50 text-slate-600"
                  }`}
                style={activeTab === "student" ? { background: BRAND.secondary } : {}}
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em]">Student Enquiry</div>
                <div className="mt-1 text-lg font-bold">Find the right tutor for your child</div>
              </button>

              <button
                onClick={() => setActiveTab("tutor")}
                className={`rounded-2xl px-5 py-4 text-left transition ${activeTab === "tutor" ? "text-white shadow-lg" : "bg-slate-50 text-slate-600"
                  }`}
                style={activeTab === "tutor" ? { background: BRAND.primary } : {}}
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em]">Tutor Application</div>
                <div className="mt-1 text-lg font-bold">Apply as a tutor with EDUNEST</div>
              </button>
            </div>

            {activeTab === "student" ? (

              <div className="mt-8 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] " >
                <div className="hidden rounded-[28px] bg-slate-50 p-8 ring-1 ring-slate-200 lg:block lg:p-10" style={{ background: BRAND.secondary }}>
                  <SectionBadge>Student / Parent Form</SectionBadge>
                  <h3 className={`${headingFont.className} mt-5 text-3xl font-extrabold tracking-tight text-slate-900`}>
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

                    <InputField label="School Name">
                      <CommonInput
                        value={parentForm.schoolName}
                        onChange={(e) => setParentForm({ ...parentForm, schoolName: e.target.value })}
                        placeholder="Enter school name"
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

                    <InputField label="Minimum Budget">
                      <CommonSelect
                        value={parentForm.minBudget}
                        onChange={(e) => setParentForm({ ...parentForm, minBudget: e.target.value })}
                      >
                        <option value="">Select minimum budget</option>
                        {budgetOptions.map((item) => (
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
                    By submitting this form, you agree to be contacted by EDUNEST via phone, email, or WhatsApp.
                    Your details are kept private and used only for tutor matching and support.
                  </p>
                </form>
              </div>
            ) : (
              <div className="mt-8 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
                <div
                  className="hidden rounded-[28px] p-8 text-white shadow-sm lg:block lg:p-10"
                  style={{ background: `linear-gradient(145deg, ${BRAND.primary}, #1A8AC8)` }}
                >
                  <SectionBadge>Tutor Application</SectionBadge>
                  <h3 className={`${headingFont.className} mt-5 text-3xl font-extrabold tracking-tight`}>Apply as a Tutor with EDUNEST</h3>
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
                      WhatsApp EDUNEST
                    </a>
                  </div>

                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    By submitting this form, you agree to be contacted by EDUNEST via phone, email, or WhatsApp.
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
            <h2 className={`${headingFont.className} mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl`}>
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
                  Start Your Child’s Learning Journey with EDUNEST
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/80">
                  Whether you are a parent looking for the right tutor or a teacher ready to apply, EDUNEST keeps the first step simple.
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
              EDUNEST is a home tuition platform connecting parents and tutors through a simple, modern, and lead-focused website experience.
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
                <Phone className="h-4 w-4" /> EDUNEST: {PRIMARY_PHONE}
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
          © {new Date().getFullYear()} EDUNEST. All rights reserved. Designed & Developed by{" "}
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

      <style jsx global>{`
        .review-marquee {
          animation: edunest-review-marquee 26s linear infinite;
          will-change: transform;
        }

        @keyframes edunest-review-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .review-marquee {
            animation-duration: 20s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .review-marquee {
            animation: none;
          }
        }
      `}</style>

      <FloatingSocials />
    </div>
  );
}