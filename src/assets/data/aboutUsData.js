import { FaLocationDot, FaMessage, FaPhone } from "react-icons/fa6";
import { IoChatbubbleSharp } from "react-icons/io5";

export const aboutUsData = [
  {
    name: "Chat to sales",
    description: "Speak to our friendly team.",
    contact: "sales@gmail.com",
    icon: FaMessage,
  },
  {
    name: "Chat to support",
    description: "We’re here to help.",
    contact: "support@gmail.com",
    icon: IoChatbubbleSharp,
  },
  {
    name: "Visit us",
    description: "Visit our office HQ.",
    contact: "677, Brothers Tower, east Dholaipar, kadamtoli, dhaka-1236",
    icon: FaLocationDot,
  },
  {
    name: "Call us",
    description: "Mon-Fri from 8am to 5pm.",
    contact: "+88014XXXXXX",
    icon: FaPhone,
  },
];
