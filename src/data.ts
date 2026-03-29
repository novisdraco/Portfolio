export const resumeData = {
  basics: {
    name: "TEJAS JAVALI",
    title: "Network Engineer",
    summary:
      "CCNA-certified Network Engineer with over 1 year of experience in configuring, deploying, and troubleshooting enterprise routing and switching infrastructure. Proficient in Cisco IOS, OSPF/EIGRP, VLAN provisioning, 802.1Q trunking, NAT/PAT, and ACL-based security across LAN/WAN environments. Experienced in packet-level troubleshooting with Wireshark, network simulation using GNS3 and EVE-NG, and proactive monitoring via SNMPv3, NetFlow, and SolarWinds. Adept at systematic fault isolation, performance optimization, and maintaining high-availability enterprise connectivity.",
    location: "Manchester, UK",
    email: "tejasmtgo@gmail.com",
    phone: "+44 7435836187",
    links: [
      {
        name: "LinkedIn",
        url: "LinkedIn",
      },
    ],
  },
  experience: [
    {
      company: "InfiData Solutions",
      role: "Network Engineer Intern",
      dates: "04/2023 – 04/2024",
      location: "Bangalore, India",
      bullets: [
        "Provisioned and configured VLANs across 20+ Cisco Catalyst 9200/9300 series switches using Cisco IOS CLI, implementing 802.1Q trunking and access port assignments to segment departmental traffic and reduce broadcast domain overhead for approximately 200 users.",
        "Configured and maintained single-area OSPFv2 on Cisco ISR 4000 series routers to establish neighbor adjacencies across distribution and edge layers, ensuring dynamic route convergence and uninterrupted site-to-site connectivity across the enterprise WAN.",
        "Designed and applied standard and extended ACLs on Cisco ISR routers to enforce perimeter security policies, restricting unauthorized inbound traffic to critical server subnets while permitting business-essential services such as DNS, DHCP, and HTTPS.",
        "Supported a floor expansion by calculating VLSM-based subnet allocations, extending NAT/PAT translation pools, and terminating copper uplinks to access layer switches, enabling network access for 80+ newly deployed endpoints with zero downtime.",
        "Deployed proactive network monitoring using SNMPv3 polling and NetFlow traffic analysis via SolarWinds NPM, identifying bandwidth bottlenecks and interface errors to maintain 99.9% uptime across core infrastructure.",
      ],
    },
  ],
  achievements: [
    {
      title: "Broadcast Domain Optimization",
      context: "Segmented departmental traffic and reduced broadcast domain overhead for approximately 200 users.",
    },
    {
      title: "Zero Downtime Expansion",
      context: "Enabled network access for 80+ newly deployed endpoints with zero downtime.",
    },
    {
      title: "High Availability",
      context: "Maintained 99.9% uptime across core infrastructure.",
    },
  ],
  projects: [
    {
      title: "Enterprise Branch Office Infrastructure Simulation",
      stack: "Cisco Packet Tracer, GNS3, Cisco IOSv, Wireshark",
      bullets: [
        "Designed a multi-VLAN branch office topology on Cisco Packet Tracer, provisioning access and trunk ports with 802.1Q encapsulation across virtualized Catalyst switches to segment departmental traffic and isolate broadcast domains.",
        "Configured Router-on-a-Stick inter-VLAN routing with DHCP server pools on a Cisco ISR router, and established single-area OSPFv2 between branch and HQ sites on GNS3 for dynamic route advertisement and rapid convergence.",
        "Implemented PAT/NAT overload with extended ACLs on the edge router, aggregated switch uplinks using EtherChannel (LACP), and tuned Rapid PVST+ root bridge priority to prevent Layer 2 loops.",
        "Validated end-to-end reachability via ICMP ping sweeps and analysed OSPF Hello packets, ARP resolution, and routing tables through Wireshark captures integrated with GNS3.",
      ],
      links: [],
    },
    {
      title: "Enterprise First Hop Redundancy & Gateway Failover Simulation",
      stack: "GNS3, Cisco IOSv, Wireshark",
      bullets: [
        "Built a dual-router gateway redundancy topology on GNS3 using Cisco IOSv routers, configuring HSRP with priority values and preemption to provide seamless default gateway failover with sub-second convergence for client traffic.",
        "Implemented VRRP on a parallel subnet to benchmark against HSRP, evaluating differences in election processes, advertisement intervals, and failover timing across both protocols.",
        "Simulated primary router failures by administratively shutting interfaces and disconnecting uplinks, verifying standby takeover without packet loss using continuous ICMP ping tests.",
        "Captured and analysed HSRP Hello packets and VRRP advertisements in Wireshark to verify protocol timers, priority negotiation, and state transitions between Active, Standby, and Init states.",
      ],
      links: [],
    },
  ],
  skills: [
    {
      category: "Routing & Switching",
      items: [
        "OSPFv2/v3",
        "EIGRP",
        "Static & Default Routing",
        "VLAN Provisioning",
        "802.1Q Trunking",
        "Rapid PVST+",
        "EtherChannel (LACP)",
        "Inter-VLAN Routing (ROAS)",
        "HSRP/VRRP",
      ],
    },
    {
      category: "Networking Fundamentals",
      items: [
        "TCP/IP",
        "OSI Model",
        "IPv4/IPv6 Addressing & Subnetting",
        "VLSM",
        "NAT/PAT",
        "DNS",
        "DHCP",
        "ARP",
        "TCP vs UDP",
      ],
    },
    {
      category: "Network Security",
      items: [
        "Standard & Extended ACLs",
        "Switchport Port Security",
        "DHCP Snooping",
        "Dynamic ARP Inspection",
        "AAA (RADIUS/TACACS+)",
        "IPsec VPN",
        "WPA2/WPA3",
        "Device Hardening",
      ],
    },
    {
      category: "Monitoring & Services",
      items: [
        "SNMPv2/v3",
        "NetFlow",
        "Syslog",
        "NTP",
        "QoS (Classification, Marking, Policing, Shaping)",
        "SSH Remote Access",
      ],
    },
    {
      category: "Automation & Programmability",
      items: [
        "Ansible",
        "Terraform",
        "REST APIs",
        "JSON",
        "Controller-Based Networking (SDN)",
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Cisco IOS CLI",
        "Wireshark",
        "GNS3",
        "EVE-NG",
        "Cisco Packet Tracer",
        "SolarWinds",
        "PuTTY/Tera Term",
      ],
    },
    {
      category: "Operating Systems",
      items: ["Linux (CLI Administration)", "Windows Server", "Windows 10/11"],
    },
  ],
  education: [
    {
      degree: "Master of Science in Cybersecurity",
      institution: "Coventry University",
      dates: "09/2024 – 08/2025",
      location: "Coventry, UK",
      details:
        "Modules: Network Security, Ethical Hacking & Penetration Testing, Security Architecture & Infrastructure, Digital Forensics",
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Government Engineering College Raichur",
      dates: "2020 – 2024",
      location: "Raichur, India",
      details:
        "Modules: Computer Networks, Operating Systems, Data Communications, Network Programming",
    },
  ],
  certifications: [
    "CCNA (Cisco Certified Network Associate) – March 2026",
    "eJPT (In Progress)",
  ],
  awards: [],
  extra: [],
};
