"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const team = [
  {
    name: "Durga Prasad Rath",
    role: "Founder & CEO",
    age: 46,
    tag: "Ex Corporate Leader",
    bio: "~20 years of leadership experience with global corporates including PepsiCo, Cadbury, Nivea, and Diageo. Proven track record in business growth, strategic planning, revenue growth, negotiations, and high-performance team building.",
    initials: "DPR",
    image: "durga.png",
  },
  {
    name: "Bira Kishore Rath",
    role: "Chief Consultant",
    age: 70,
    tag: "Retired OIS",
    bio: "Last worked as GM DIC, Odisha. Expertise in MSME policies, regulatory compliance, and funding frameworks.",
    initials: "BK",
    image: "Bira.png",
  },
  {
    name: "Lipsa Rath",
    role: "CMO",
    age: 41,
    tag: "Young Female Entrepreneur",
    bio: "Digital Marketing and Editing Engineering background. Experienced in increasing website traffic.",
    initials: "LR",
    image: "Lipsa.png",
  },
  {
    name: "Debasis Rath",
    role: "Founder & CTO",
    age: 38,
    tag: "",
    bio: "15+ years at Wipro leading large-scale IT and digital transformation programs. Deep expertise in Agile/Scrum/Waterfall delivery, enterprise platforms, vendor management, and risk mitigation.",
    initials: "DR",
    image: "Debasis.png",
  },
  {
    name: "Dibya Prasad Rath",
    role: "CFO",
    age: 22,
    tag: "Passionate Young Commerce Graduate",
    bio: "Cleared CA, CMA, CS Foundation. Strong expertise in Taxation, Audit and other financial guidelines.",
    initials: "Dib",
    image: "dibya.png",
  },
  {
    name: "Sandeep Priyadarshi Biswal",
    role: "Chief Tech Consultant",
    age: 21,
    tag: "B. Tech (Electrical) from CET",
    bio: "Highly enthusiastic and a go-getter. Possesses strong Digital Marketing and AI knowledge.",
    initials: "SP",
    image: "sandeep.png",
  },
];

export function Team() {
  const { t } = useLanguage();

  return (
    <section id="team" className="section-padding bg-white">
      <div className="max-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {t.team.title}
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            {t.team.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => {
            const TeamMemberImage = () => {
              const [imageError, setImageError] = useState(false);
              
              if (imageError) {
                return (
                  <div className="absolute inset-0 bg-gradient-to-br from-ekatraa-primary to-ekatraa-primary-end flex items-center justify-center text-white font-bold text-lg">
                    {member.initials}
                  </div>
                );
              }
              
              return (
                <Image
                  src={`/${member.image}`}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                  onError={() => setImageError(true)}
                />
              );
            };
            
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group rounded-2xl border border-ekatraa-border bg-white p-6 shadow-sm hover:shadow-xl hover:border-ekatraa-primary/30 transition-all overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-lg shadow-ekatraa-primary/30 group-hover:scale-105 transition-transform ring-2 ring-ekatraa-primary/20">
                    <TeamMemberImage />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                    <p className="text-ekatraa-primary font-semibold text-sm">{member.role}</p>
                    {(member.tag || member.age) && (
                      <p className="text-gray-500 text-sm mt-0.5">
                        {[member.tag, member.age ? `Age ${member.age}` : null].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
