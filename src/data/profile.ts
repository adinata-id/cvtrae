import { ProfileData, Skill, Experience, Project, Article, Contact } from '../types/terminal';

export const profileData: ProfileData = {
  name: 'Adi Pratama',
  title: 'Web Programmer & Security Researcher',
  description: 'Passionate web developer with expertise in cybersecurity and network infrastructure. Specialized in creating secure web applications and conducting penetration testing.',
  photo: '/api/placeholder/400/300'
};

export const skills: Skill[] = [
  { name: 'Laravel', percentage: 95, category: 'framework' },
  { name: 'MySQL', percentage: 90, category: 'database' },
  { name: 'Cloud Computing', percentage: 85, category: 'cloud' },
  { name: 'Mikrotik', percentage: 88, category: 'networking' },
  { name: 'Ruijie Network', percentage: 82, category: 'networking' },
  { name: 'PHP', percentage: 92, category: 'framework' },
  { name: 'JavaScript', percentage: 88, category: 'framework' },
  { name: 'React', percentage: 85, category: 'framework' }
];

export const experiences: Experience[] = [
  {
    company: 'CyberSec Solutions',
    position: 'Senior Web Developer',
    startDate: '2022-01-15',
    endDate: '2024-12-01',
    description: [
      'Developed secure web applications using Laravel and React',
      'Implemented penetration testing frameworks',
      'Managed cloud infrastructure on AWS and DigitalOcean',
      'Led team of 5 developers in security-focused projects'
    ]
  },
  {
    company: 'Network Pro Indonesia',
    position: 'Full Stack Developer',
    startDate: '2020-06-01',
    endDate: '2021-12-31',
    description: [
      'Built network monitoring tools using PHP and MySQL',
      'Configured Mikrotik and Ruijie network devices',
      'Developed automated backup systems',
      'Created network security assessment tools'
    ]
  },
  {
    company: 'Tech Startup Jakarta',
    position: 'Junior Web Developer',
    startDate: '2019-03-01',
    endDate: '2020-05-31',
    description: [
      'Developed RESTful APIs using Laravel',
      'Implemented database optimization techniques',
      'Created responsive web interfaces',
      'Assisted in server maintenance and deployment'
    ]
  }
];

export const projects: Project[] = [
  {
    name: 'Network Security Scanner',
    description: 'Automated tool for scanning network vulnerabilities and generating security reports',
    category: 'tool',
    url: 'https://github.com/adipratama/network-scanner'
  },
  {
    name: 'Mikrotik Config Manager',
    description: 'Web-based interface for managing multiple Mikrotik devices with backup automation',
    category: 'tool',
    url: 'https://github.com/adipratama/mikrotik-manager'
  },
  {
    name: 'Secure File Sharing Platform',
    description: 'Encrypted file sharing service with end-to-end encryption and access control',
    category: 'website',
    url: 'https://secureshare.adipratama.dev'
  },
  {
    name: 'PenTest Automation Script',
    description: 'Bash script for automated penetration testing with report generation',
    category: 'script',
    url: 'https://github.com/adipratama/pentest-automation'
  },
  {
    name: 'Cloud Infrastructure Monitor',
    description: 'Real-time monitoring dashboard for cloud servers and applications',
    category: 'website',
    url: 'https://monitor.adipratama.dev'
  }
];

export const articles: Article[] = [
  {
    title: 'Cara Setup VPN Server di Mikrotik dengan Keamanan Maksimal',
    date: '2024-11-15',
    category: 'Networking'
  },
  {
    title: 'Implementasi OAuth2 dengan Laravel untuk Aplikasi Enterprise',
    date: '2024-10-28',
    category: 'Web Development'
  },
  {
    title: 'Pentingnya Security Headers dalam Pengembangan Web Modern',
    date: '2024-10-12',
    category: 'Security'
  },
  {
    title: 'Optimasi Query MySQL untuk Aplikasi dengan Traffic Tinggi',
    date: '2024-09-20',
    category: 'Database'
  },
  {
    title: 'Deploy Aplikasi Laravel di AWS dengan Auto Scaling',
    date: '2024-09-05',
    category: 'Cloud Computing'
  }
];

export const contactData: Contact = {
  address: 'Jakarta, Indonesia',
  phone: '+62 812-3456-7890',
  email: 'adi.pratama@security.id',
  website: 'https://adipratama.dev'
};