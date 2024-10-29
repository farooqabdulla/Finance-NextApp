"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Farooq",
    email: "farooqabdulla15@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Finance App",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    }
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard", // Ensure this URL points to your dashboard page
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "/dashboard/history",
        },
        {
          title: "Starred",
          url: "/dashboard/starred",
        },
        {
          title: "Settings",
          url: "/dashboard/settings",
        },
      ],
    },
    {
      title: "Loans",
      url: "/loans", // Ensure this URL points to your loans page
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "/loans/genesis",
        },
        {
          title: "Explorer",
          url: "/loans/explorer",
        },
        {
          title: "Quantum",
          url: "/loans/quantum",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings", // Ensure this URL points to your settings page
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/settings/general",
        },
        {
          title: "Team",
          url: "/settings/team",
        },
        {
          title: "Billing",
          url: "/settings/billing",
        },
        {
          title: "Limits",
          url: "/settings/limits",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
