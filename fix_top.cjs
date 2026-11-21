const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const imports = `"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SyllabusTabs from "../../../components/SyllabusTabs";
import CourseReviewSlider from "../../../components/CourseReviewSlider";
import DigitalMarketingLeadForm from "../../../components/DigitalMarketingLeadForm";
import FloatingCourseCTA from "../../../components/FloatingCourseCTA";
import StickyCourseNav from "../../../components/StickyCourseNav.jsx";
import MagicCursorContainer from "../../../components/MagicCursorContainer.jsx";
import {
  IconArrowLeft,
  IconCrown,
  IconUsers,
  IconRoute,
  IconSpeakerphone,
  IconTargetArrow,
  IconChartBar,
  IconSparkles,
  IconCertificate,
  IconCurrencyRupee,
  IconAd,
  IconPointer,
  IconEye,
  IconUserDollar,
  IconFilterCheck,
  IconShare, IconCalendarEvent, IconDeviceDesktop, IconClock, IconSchool, IconVideo, IconBriefcase } from "@tabler/icons-react";
import { Laptop, Wifi, BookOpen, Monitor, Clock, Sparkles } from "lucide-react";`;

// I need to replace everything from the beginning of the file up to the first component definition or constant.
// Let's find `const LEARNING_GOALS = [` and clear everything before it, replacing it with the imports.
const goalsStart = content.indexOf('const LEARNING_GOALS = [');
if (goalsStart !== -1) {
  content = imports + '\n\n' + content.substring(goalsStart);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed top of file!');
} else {
  console.log('Could not find LEARNING_GOALS constant');
}
