export const conferenceData = {
  title: 'Recent Trends in Electronics & Communication Engineering',
  acronym: 'RTECE',
  year: 2026,
  tagline: 'National Conference on',
  
  institution: {
    name: 'Maharaja Institute of Technology Mysore',
    shortName: 'MIT Mysore',
    established: 2007,
    type: 'Autonomous Institution',
    affiliation: 'VTU Belagavi',
    approvals: ['AICTE New Delhi', 'Government of Karnataka'],
    intake: '3000+',
    about: `Maharaja Institute of Technology Mysore was established in the year 2007 by MET(R) in a serene location surrounded by sprawling landscape. The Institute is initiated and built by a group of reputable people recognized for their eminence in the field of Science and Technology. The institute shown a brisk growth to its potential leaving foot marks at numerous miles stones soon just in a decade. Institute owns a stature known for serving the society with quality education and is well accepted by all the stakeholders. To the date, the institute is nurturing an intake of 3000 plus offering various programs at undergraduate, postgraduate and research level.`,
    address: 'Belavadi, Srirangapatna Taluk, Mandya District, Karnataka – 571477, India',
  },

  department: {
    name: 'Department of Electronics and Communication Engineering',
    shortName: 'ECE',
    established: 2007,
    intake: 120,
    head: 'Dr. Parimala R V',
    about: `The Department of Electronics and Communication Engineering (ECE) at Maharaja Institute of Technology Mysore was established in 2007 with an intake of 60, which increased to 120 in 2009. Headed by Dr. R. V. Parimala, the department has well-qualified and experienced faculty, conducts FDPs and workshops regularly, and has specialized state-of-the-art laboratories that support research, practical, and VTU standards. The department also promotes holistic student development through its clubs, eMITERS and Yanthronics.`,
    clubs: ['eMITERS', 'Yanthronics'],
  },

  about: `The National Conference on Recent Trends in Electronics and Communication Engineering (RTECE) aims to provide students to share recent advancements, innovative ideas, and emerging technologies in the field of Electronics and Communication Engineering. The conference will focus on contemporary developments in areas such as VLSI and semiconductor technologies, embedded systems, IoT, artificial intelligence and machine learning, 5G/6G communication, wireless and optical communication, signal and image processing, wireless and smart systems, robotics, biomedical electronics, FPGA and digital systems.`,

  dates: {
    submissionOpens: { date: '14th October 2026', label: 'Submission Opens', iso: '2026-10-14' },
    lastSubmission: { date: '5th November 2026', label: 'Last Date for Submission', iso: '2026-11-05T23:59:59+05:30' },
    acceptance: { date: '8th November 2026', label: 'Paper Acceptance Notification', iso: '2026-11-08' },
    conference: { date: '12th November 2026', label: 'Conference Date', iso: '2026-11-12T09:00:00+05:30' },
  },

  registration: {
    formUrl: 'https://forms.gle/T9BY2GTUVuCoDABG6',
    fees: [
      { category: 'MITM Students', price: '₹1,200', description: 'Enrolled students of MIT Mysore' },
      { category: 'Other Colleges (Students)', price: '₹1,500', description: 'Students from other institutions' },
    ],
    note: 'Certificates will be issued for registered participants only.',
  },

  publication: {
    journal: 'IARJSET',
    fullName: 'International Advanced Research Journal in Science, Engineering and Technology',
    url: 'https://iarjset.com/',
    scholarUrl: 'https://scholar.google.com/citations?user=-aflo_sAAAAJ',
    features: ['Peer-Reviewed', 'Open Access', 'Google Scholar Indexed', 'Digital Archival'],
  },

  tracks: [
    { id: 1, title: 'VLSI & Semiconductor Technologies', icon: 'Cpu', category: 'vlsi', keywords: ['CMOS', 'Nanoscale', 'IC Design', 'Low Power'] },
    { id: 2, title: 'Embedded Systems', icon: 'Microchip', category: 'embedded', keywords: ['RTOS', 'ARM', 'RISC-V', 'Firmware'] },
    { id: 3, title: 'Internet of Things (IoT)', icon: 'Wifi', category: 'embedded', keywords: ['Smart Cities', 'IIoT', 'Edge Computing', 'WSN'] },
    { id: 4, title: 'AI & Machine Learning', icon: 'BrainCircuit', category: 'ai', keywords: ['Deep Learning', 'TinyML', 'Edge AI', 'Neural Networks'] },
    { id: 5, title: '5G / 6G Communication', icon: 'RadioTower', category: 'comms', keywords: ['Massive MIMO', 'mmWave', 'URLLC', 'Network Slicing'] },
    { id: 6, title: 'Wireless & Optical Communication', icon: 'Satellite', category: 'comms', keywords: ['Fiber Optics', 'Photonics', 'FSO', 'RF'] },
    { id: 7, title: 'Signal & Image Processing', icon: 'ScanFace', category: 'ai', keywords: ['DSP', 'Medical Imaging', 'Biometrics', 'Compression'] },
    { id: 8, title: 'Wireless & Smart Systems', icon: 'Zap', category: 'embedded', keywords: ['Smart Grids', 'Cyber-Physical', 'Wireless Power'] },
    { id: 9, title: 'Robotics & Autonomous Systems', icon: 'Bot', category: 'embedded', keywords: ['ROS', 'UAV', 'AMR', 'Industrial Automation'] },
    { id: 10, title: 'Biomedical Electronics', icon: 'Activity', category: 'embedded', keywords: ['Biosensors', 'Telemedicine', 'Wearables', 'ECG/EEG'] },
    { id: 11, title: 'FPGA & Digital Systems', icon: 'Boxes', category: 'vlsi', keywords: ['Verilog', 'VHDL', 'SoC', 'Reconfigurable'] },
  ],

  chiefPatrons: [
    {
      name: 'Dr. Naresh Kumar B G',
      role: 'President, MET Mysuru',
      image: '/faculty/nareshkumar.jpg',
    },
    {
      name: 'Dr. G Hemantha Kumar',
      role: 'Vice President, MET Mysuru | Former VC, UOM',
      image: '/faculty/hemanthkumar.jpg',
    },
    {
      name: 'Dr. Y T Krishna Gowda',
      role: 'Secretary, MET Mysuru | Principal, MITT',
      image: '/faculty/krishnegowda.jpg',
    },
    {
      name: 'Dr. H K Chethan',
      role: 'Joint Secretary, MET Mysuru',
      image: '/faculty/chethan.jpg',
    },
    {
      name: 'Dr. D S Guru',
      role: 'Treasurer, MET Mysuru',
      image: '/faculty/guru.jpg',
    },
    {
      name: 'Dr. T Vasudev',
      role: 'Trustee, MET Mysuru',
      image: '/faculty/vasudev.jpg',
    },
    {
      name: 'Dr. Ananth R Koppar',
      role: 'Trustee, MET Mysuru',
      image: '/faculty/koppar.jpg',
    },
  ],

  patron: {
    name: 'Dr. Murali S',
    role: 'Principal, MITM | Founder President of MET®',
    image: '/faculty/murali.jpg',
  },
  convener: {
    name: 'Dr. Parimala R V',
    role: 'Head and Professor, Department of ECE',
    image: '/faculty/parimala.jpg',
  },
  coordinator: {
    name: 'Dr. Balakrishna K',
    role: 'Associate Professor, Department of ECE',
    qualification: 'M.Tech PhD',
    phone: '+91 97384 81655',
    email: 'balakrishna_ece@mitmysore.in',
    image: '/faculty/balakrishna.jpg',
  },

  technicalTeam: [
    {
      name: 'Dr. Mahesh Kumar A S',
      designation: 'Associate Professor',
      qualification: 'M.Tech Ph.D',
      image: '/faculty/mahesh.jpg',
    },
    {
      name: 'Prof. Ravi Kumar H',
      designation: 'Assistant Professor',
      qualification: 'M.Tech',
      image: '/faculty/ravikumar.jpg',
    },
    {
      name: 'Prof. Lethan M N',
      designation: 'Assistant Professor',
      qualification: 'M.Tech (Ph.D)',
      image: '/faculty/lethan.jpg',
    },
    {
      name: 'Prof. Nimmanapalli Rajesh',
      designation: 'Assistant Professor',
      phone: '9480839641',
      email: 'rajeshn_ece@mitmysore.in',
      image: '/faculty/rajesh.jpg',
    },
    {
      name: 'Prof. Maria Pavithra',
      designation: 'Assistant Professor',
      qualification: 'M.Tech (Ph.D)',
      image: '/faculty/mariapavithra.jpg',
    },
    {
      name: 'Prof. Shwetha K',
      designation: 'Assistant Professor',
      qualification: 'M.Tech (Ph.D)',
      image: '/faculty/shwetha.jpg',
    },
    {
      name: 'Prof. Sandesh N G',
      designation: 'Assistant Professor',
      phone: '9480843654',
      email: 'sandeshng_ece@mitmysore.in',
      image: '/faculty/sandesh.jpg',
    },
  ],

  contacts: [
    {
      name: 'Dr. Balakrishna K',
      role: 'Coordinator',
      phone: '+91 97384 81655',
      email: 'balakrishna_ece@mitmysore.in',
      image: '/faculty/balakrishna.jpg',
    },
    {
      name: 'Prof. Sandesh N G',
      role: 'Technical Team',
      phone: '9480843654',
      email: 'sandeshng_ece@mitmysore.in',
      image: '/faculty/sandesh.jpg',
    },
    {
      name: 'Prof. Nimmanapalli Rajesh',
      role: 'Technical Team',
      phone: '9480839641',
      email: 'rajeshn_ece@mitmysore.in',
      image: '/faculty/rajesh.jpg',
    },
  ],
};
