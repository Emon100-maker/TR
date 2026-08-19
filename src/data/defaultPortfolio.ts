import { PortfolioData } from '../types';

export const defaultPortfolioData: PortfolioData = {
  name: "Tanveer Rahman Emon",
  title: "Academic Professional | Educator | Agricultural Engineering Under Graduate | Technical & Research Enthusiast",
  roles: [
    "Academic Professional & Educator",
    "Agricultural Engineering Under Graduate",
    "Irrigation & Water Management Specialist",
    "Technical & Research Enthusiast",
    "Data Analysis & Computational Applications"
  ],
  bio: "Academic and technical professional with an academic background in Agricultural Engineering & Technology, with specialization in Irrigation & Water Management. Interested in education, agricultural engineering, technical problem solving, research, data analysis, GIS, hydrology and computational applications.",
  careerObjective: "To build a meaningful professional career where academic knowledge, engineering skills, teaching ability, research interests and technical competencies can be applied to practical challenges while contributing to organizational and societal development.",
  shortBio: "Academic professional, educator, and agricultural engineering undergraduate specializing in Irrigation & Water Management, hydrology, GIS, and computational applications.",
  profilePicUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  cvPdfUrl: "https://drive.google.com/file/d/1_Tanveer_Rahman_Emon_CV/view?usp=sharing",
  availableForHire: true,
  socials: {
    github: "https://github.com/tanveeremon",
    linkedin: "https://linkedin.com/in/tanveeremon",
    email: "tanveeremon2234@gmail.com",
    phone: "+88001912170767",
    location: "Bangladesh",
    website: "https://tanveeremon.dev",
    twitter: "https://twitter.com/tanveeremon"
  },
  education: [
    {
      id: "edu-bsc",
      level: "BSC",
      degree: "B.Sc. in Agricultural Engineering & Technology",
      institution: "Bangladesh Agricultural University",
      boardOrUniversity: "Faculty of Agricultural Engineering & Technology",
      gpa: "N/A",
      maxGpa: "4.00",
      year: "Under Graduate",
      period: "Undergraduate Degree",
      groupOrMajor: "Discipline: Irrigation & Water Management",
      description: "Undergraduate academic curriculum specializing in Irrigation & Water Management. Core focus areas include Hydrology & Water Resources, Soil & Water Conservation, Agricultural Mechanization, GIS & Remote Sensing, Engineering Analysis, Renewable Energy, and Computational Applications.",
      achievements: [
        "Specialization in Irrigation & Water Management",
        "Comprehensive training in Hydrological modeling & GIS spatial mapping",
        "Active involvement in technical problem solving and engineering analysis",
        "Department of Irrigation & Water Management, BAU"
      ],
      iconType: "GraduationCap"
    },
    {
      id: "edu-hsc",
      level: "HSC",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Cantonment Public School & College, Momenshahi",
      boardOrUniversity: "Dhaka Board",
      gpa: "5.00",
      maxGpa: "5.00",
      year: "2019",
      period: "Higher Secondary Certificate",
      groupOrMajor: "Discipline: Science",
      description: "Completed higher secondary curriculum in Science with top academic honors, achieving GPA 5.00 across Physics, Chemistry, Higher Mathematics, Biology, and ICT.",
      achievements: [
        "Achieved Golden GPA 5.00 / 5.00",
        "Academic Excellence Achievement",
        "Strong foundation in analytical mathematics and scientific inquiry"
      ],
      iconType: "Award"
    },
    {
      id: "edu-ssc",
      level: "SSC",
      degree: "Secondary School Certificate (SSC)",
      institution: "Premier Ideal High School, Mymensingh",
      boardOrUniversity: "Dhaka Board",
      gpa: "5.00",
      maxGpa: "5.00",
      year: "2017",
      period: "Secondary School Certificate",
      groupOrMajor: "Discipline: Science",
      description: "Completed secondary school certificate with outstanding academic performance, achieving GPA 5.00 with distinction in general sciences and higher mathematics.",
      achievements: [
        "Achieved Golden GPA 5.00 / 5.00",
        "Academic Merit & Top Performer recognition",
        "Active participant in Science Fair and academic competitions"
      ],
      iconType: "BookOpen"
    }
  ],
  skills: [
    // Technical Skills
    {
      id: "sk-python",
      name: "Python",
      category: "technical",
      level: 90,
      experienceYears: "Technical",
      iconName: "Code2",
      featured: true,
      tagline: "Data analysis, computational hydrology scripts, automation & problem solving"
    },
    {
      id: "sk-gis",
      name: "GIS & Remote Sensing",
      category: "technical",
      level: 92,
      experienceYears: "Engineering",
      iconName: "Binary",
      featured: true,
      tagline: "Geographic Information Systems, spatial mapping, watershed & terrain analysis"
    },
    {
      id: "sk-data-analysis",
      name: "Data Analysis",
      category: "technical",
      level: 88,
      experienceYears: "Analytics",
      iconName: "Cpu",
      featured: true,
      tagline: "Statistical analysis, agricultural data modeling, trend evaluation & interpretation"
    },
    {
      id: "sk-html5",
      name: "HTML5",
      category: "technical",
      level: 92,
      experienceYears: "Web",
      iconName: "FileCode",
      featured: true,
      tagline: "Semantic web architecture, accessible markup, digital documentation"
    },
    {
      id: "sk-css3",
      name: "CSS3",
      category: "technical",
      level: 90,
      experienceYears: "Web",
      iconName: "Palette",
      featured: true,
      tagline: "Modern responsive styling, user interface layout, typography"
    },
    {
      id: "sk-javascript",
      name: "JavaScript",
      category: "technical",
      level: 85,
      experienceYears: "Web",
      iconName: "Code2",
      featured: false,
      tagline: "Interactive web elements, data visualization scripting, DOM manipulation"
    },
    {
      id: "sk-git",
      name: "Git & GitHub",
      category: "technical",
      level: 88,
      experienceYears: "Tools",
      iconName: "GitBranch",
      featured: true,
      tagline: "Version control, code repositories, collaboration & open source workflows"
    },
    {
      id: "sk-msoffice",
      name: "MS Office Suite",
      category: "technical",
      level: 95,
      experienceYears: "Productivity",
      iconName: "Layers",
      featured: true,
      tagline: "MS Excel (advanced formulas/sheets), MS PowerPoint, MS Access, MS Word"
    },
    {
      id: "sk-r",
      name: "R Programming",
      category: "technical",
      level: 82,
      experienceYears: "Analytics",
      iconName: "Terminal",
      featured: false,
      tagline: "Statistical computing, agricultural trials analysis, data plots"
    },
    {
      id: "sk-autocad",
      name: "AutoCAD",
      category: "technical",
      level: 85,
      experienceYears: "Engineering",
      iconName: "Layers",
      featured: false,
      tagline: "2D engineering drafting, irrigation channel layout, structure designs"
    },
    {
      id: "sk-adobe",
      name: "Adobe Photoshop & Illustrator",
      category: "technical",
      level: 86,
      experienceYears: "Design",
      iconName: "Palette",
      featured: false,
      tagline: "Technical illustration, infographics, digital presentation graphics"
    },

    // Academic / Professional Skills
    {
      id: "sk-teaching",
      name: "Teaching & Instruction",
      category: "academic",
      level: 96,
      experienceYears: "Professional",
      iconName: "Sparkles",
      featured: true,
      tagline: "Online & offline instruction, student mentorship, interactive pedagogy"
    },
    {
      id: "sk-content-dev",
      name: "Academic Content Development",
      category: "academic",
      level: 94,
      experienceYears: "Professional",
      iconName: "FileCode",
      featured: true,
      tagline: "Curriculum design, lecture notes, syllabus structuring, test prep materials"
    },
    {
      id: "sk-research",
      name: "Research Methodology",
      category: "academic",
      level: 90,
      experienceYears: "Academic",
      iconName: "Cpu",
      featured: true,
      tagline: "Literature review, experimental design, field data collection, scientific synthesis"
    },
    {
      id: "sk-problem-solving",
      name: "Problem Solving",
      category: "academic",
      level: 92,
      experienceYears: "Core",
      iconName: "Binary",
      featured: true,
      tagline: "Analytical breakdown of complex technical and engineering challenges"
    },
    {
      id: "sk-tech-doc",
      name: "Technical Documentation",
      category: "academic",
      level: 90,
      experienceYears: "Professional",
      iconName: "Layers",
      featured: false,
      tagline: "Scientific reports, lab manuals, project summaries, structured documentation"
    },
    {
      id: "sk-presentation",
      name: "Presentation & Public Speaking",
      category: "academic",
      level: 95,
      experienceYears: "Awarded",
      iconName: "Flame",
      featured: true,
      tagline: "Best Presentation Award recipient, clear verbal articulation, slide storytelling"
    },
    {
      id: "sk-project-mgmt",
      name: "Project Management",
      category: "academic",
      level: 88,
      experienceYears: "Management",
      iconName: "Server",
      featured: false,
      tagline: "Planning, milestone tracking, resource allocation, and team coordination"
    },

    // Soft Skills
    {
      id: "sk-communication",
      name: "Communication",
      category: "soft",
      level: 95,
      experienceYears: "Core",
      iconName: "Sparkles",
      featured: true,
      tagline: "Clear written and verbal interaction across academic and professional teams"
    },
    {
      id: "sk-leadership",
      name: "Leadership",
      category: "soft",
      level: 90,
      experienceYears: "Core",
      iconName: "Flame",
      featured: true,
      tagline: "Guiding student groups, coordinating project teams, and fostering collaboration"
    },
    {
      id: "sk-teamwork",
      name: "Teamwork & Collaboration",
      category: "soft",
      level: 92,
      experienceYears: "Core",
      iconName: "Layers",
      featured: false,
      tagline: "Cross-functional collaboration with researchers, educators, and peers"
    },
    {
      id: "sk-time-mgmt",
      name: "Time Management",
      category: "soft",
      level: 90,
      experienceYears: "Core",
      iconName: "Terminal",
      featured: false,
      tagline: "Prioritizing deadlines, managing concurrent academic and teaching workloads"
    },
    {
      id: "sk-critical-thinking",
      name: "Critical Thinking",
      category: "soft",
      level: 94,
      experienceYears: "Core",
      iconName: "Binary",
      featured: true,
      tagline: "Objective evaluation of evidence, logical deduction, and structured reasoning"
    },
    {
      id: "sk-adaptability",
      name: "Adaptability",
      category: "soft",
      level: 92,
      experienceYears: "Core",
      iconName: "Cpu",
      featured: false,
      tagline: "Rapidly mastering new technologies, methodologies, and dynamic environments"
    }
  ],
  experience: [
    {
      id: "exp-teaching",
      role: "Academic Instructor & Educator",
      company: "Online & Offline Educational Platforms",
      location: "Bangladesh (Hybrid)",
      period: "2020 - Present",
      type: "Teaching",
      current: true,
      description: [
        "Teaching in online and offline platforms, delivering high-impact academic instruction in science, mathematics, and engineering fundamentals.",
        "Developing structured academic content, lecture notes, visual concept summaries, and problem-solving guides for students.",
        "Conducting interactive problem-solving workshops and mentoring learners to achieve academic excellence.",
        "Employing technical documentation, modern presentation techniques, and digital learning tools to maximize engagement."
      ],
      technologies: [
        "Teaching",
        "Academic Content Development",
        "Problem Solving",
        "Technical Documentation",
        "Presentation",
        "Project Management",
        "Mentorship"
      ]
    },
    {
      id: "exp-research",
      role: "Agricultural Engineering Researcher & Student Specialist",
      company: "Bangladesh Agricultural University (BAU)",
      location: "Mymensingh, Bangladesh",
      period: "Undergraduate Studies",
      type: "Full-Time",
      current: true,
      description: [
        "Conducting specialized academic research in Irrigation & Water Management, hydrology analysis, and soil-water dynamics.",
        "Applying GIS & Remote Sensing tools for spatial water resource assessment and agricultural land evaluation.",
        "Writing technical reports, computational modeling scripts in Python and R, and presenting findings in academic seminars."
      ],
      technologies: [
        "Irrigation & Water Management",
        "GIS & Remote Sensing",
        "Hydrology",
        "Python",
        "Data Analysis",
        "AutoCAD"
      ]
    }
  ],
  researchInterests: [
    "Agricultural Engineering",
    "Agricultural Mechanization",
    "GIS & Remote Sensing",
    "Hydrology & Water Resources",
    "Soil & Water Conservation",
    "Renewable Energy",
    "Engineering Analysis",
    "Data Analysis",
    "Programming & Computational Applications"
  ],
  certifications: [
    {
      id: "cert-1",
      title: "Agricultural Extension Training Program",
      issuer: "Agricultural Extension & BAU Training Wing",
      year: "Certified",
      description: "Completed intensive practical and field training program focused on modern agricultural extension methodologies, farmer participatory approaches, and field technology dissemination."
    }
  ],
  achievements: [
    "Academic Excellence Achievement: Maintained outstanding GPA 5.00 in SSC & HSC and rigorous university coursework at Bangladesh Agricultural University.",
    "Best Presentation Award: Honored for exceptional presentation delivery, structured research slides, and communication excellence in academic forums."
  ],
  references: [
    {
      id: "ref-1",
      name: "Khalid Mahmud",
      designation: "Professor",
      department: "Department of Irrigation & Water Management",
      institution: "Bangladesh Agricultural University"
    },
    {
      id: "ref-2",
      name: "Deen Islam",
      designation: "Professor",
      department: "Department of Irrigation & Water Management",
      institution: "Bangladesh Agricultural University"
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "GIS & Remote Sensing for Water Resources",
      tagline: "Spatial hydrological analysis and watershed mapping for agricultural planning",
      description: "An academic engineering project utilizing GIS and Remote Sensing methodologies for spatial water resource evaluation, land cover mapping, and irrigation canal network assessment.",
      tags: ["GIS", "Remote Sensing", "Hydrology", "Water Resources", "Spatial Analysis"],
      category: "gis",
      githubUrl: "https://github.com/tanveeremon/gis-hydrology-mapping",
      liveUrl: "https://github.com/tanveeremon",
      highlights: [
        "Spatial analysis of watershed drainage networks and runoff zones",
        "Land cover classification using multispectral satellite datasets",
        "Integrated geospatial mapping with hydrological modeling parameters"
      ],
      codeSnippet: {
        language: "python",
        code: `# GIS & Hydrological Data Processing in Python
import numpy as np

def calculate_irrigation_requirement(crop_et: float, effective_rainfall: float, efficiency: float = 0.75) -> float:
    """
    Computes Net and Gross Irrigation Requirement (mm/day)
    """
    net_irrigation = max(0.0, crop_et - effective_rainfall)
    gross_irrigation = net_irrigation / efficiency
    return round(gross_irrigation, 2)

# Sample evaluation for agricultural watershed
et_c = 5.8  # Crop evapotranspiration (mm/day)
rain_eff = 1.2  # Effective precipitation (mm/day)
req = calculate_irrigation_requirement(et_c, rain_eff)
print(f"Gross Irrigation Requirement: {req} mm/day")`
      }
    },
    {
      id: "proj-2",
      title: "AgroData - Computational Analytics Suite",
      tagline: "Data analysis and statistical modeling for agricultural engineering & hydrology",
      description: "A computational data analysis tool developed in Python and R for processing agro-meteorological data, precipitation trends, and soil moisture variations with statistical visualization.",
      tags: ["Python", "Data Analysis", "R", "Engineering Analysis", "Statistics"],
      category: "python",
      githubUrl: "https://github.com/tanveeremon/agro-data-analytics",
      liveUrl: "https://github.com/tanveeremon",
      highlights: [
        "Automated statistical computation of precipitation indices and rainfall recurrence intervals",
        "Interactive time-series charts of crop water balance and soil-water dynamics",
        "Exportable summary reports for academic and field evaluation"
      ],
      codeSnippet: {
        language: "python",
        code: `# AgroData Precipitation Frequency Analysis
def gumbel_flood_frequency(peak_flows: list[float], return_period_years: int) -> float:
    mean_val = sum(peak_flows) / len(peak_flows)
    variance = sum((x - mean_val) ** 2 for x in peak_flows) / (len(peak_flows) - 1)
    std_dev = variance ** 0.5
    
    # Frequency factor for Gumbel distribution
    yt = -np.log(-np.log(1.0 - (1.0 / return_period_years)))
    kt = (yt - 0.5772) / 1.2825
    
    est_discharge = mean_val + (kt * std_dev)
    return round(est_discharge, 2)`
      }
    },
    {
      id: "proj-3",
      title: "EduPortal - Academic Learning Web Platform",
      tagline: "Clean, responsive educational platform built with HTML5, CSS3, & JavaScript",
      description: "An accessible, responsive online platform designed for educational instruction, allowing students to access lecture notes, structured problem sets, and interactive academic tutorials.",
      tags: ["HTML5", "CSS3", "JavaScript", "Teaching", "Responsive Web"],
      category: "web",
      githubUrl: "https://github.com/tanveeremon/academic-edu-portal",
      liveUrl: "https://tanveeremon.dev",
      highlights: [
        "Semantic HTML5 structure with responsive CSS3 layouts and clean typography",
        "Interactive lesson viewer and academic problem-solving modules",
        "Optimized for fast mobile and desktop access across diverse network speeds"
      ],
      codeSnippet: {
        language: "html",
        code: `<!-- EduPortal Responsive Academic Lesson Module -->
<article class="academic-lesson-card">
  <header class="lesson-header">
    <span class="badge">Irrigation Engineering</span>
    <h3>Principles of Water Management</h3>
  </header>
  <div class="lesson-body">
    <p>Comprehensive overview of surface and pressurized irrigation systems.</p>
    <a href="#materials" class="btn-download">Download Lecture Notes (PDF)</a>
  </div>
</article>`
      }
    },
    {
      id: "proj-4",
      title: "Irrigation & Water Management Engineering Model",
      tagline: "Hydraulic design and irrigation channel flow simulation framework",
      description: "An engineering analysis project calculating open-channel flow parameters (Manning formula), hydraulic radius, soil infiltration rates, and water conveyance efficiency for sustainable agriculture.",
      tags: ["Agricultural Engineering", "Hydrology", "AutoCAD", "Water Management"],
      category: "engineering",
      githubUrl: "https://github.com/tanveeremon/irrigation-water-management",
      liveUrl: "https://github.com/tanveeremon",
      highlights: [
        "Manning equation calculation of channel discharge and flow velocity",
        "Soil-water characteristic curve fitting and infiltration models",
        "AutoCAD 2D channel section drawings and irrigation layout plans"
      ]
    }
  ]
};
