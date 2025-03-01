import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import '@fortawesome/fontawesome-free/css/all.min.css';
import Notification from './components/Notification';
import { Form, Button, InputGroup } from 'react-bootstrap';

// logos
import LSPDLogo from './assets/lspd.png'
import LSSDLogo from './assets/lssd.png'
import LSFDLogo from './assets/lsfd.png'
import maternity from './assets/maternity.png'
import obstetrical from './assets/obstetrical.png'
import psychology from './assets/psychology.png'
import gyne from './assets/gyne.png'
import email from './assets/email.png'
import gynecology from './assets/gynecology.png'
import surgeon from './assets/surgeon.png'
import application from './assets/application.png'
import emergency from './assets/emergency.png'
import nurse from './assets/nurse.png'
import PHMCLogo from './assets/phmc.png'
import empathy from './assets/empathy.png'
import mentalhealth from './assets/mentalhealth.png'
import noshow from './assets/noshow.png'
import dentist from './assets/dentist.png'
import corpse from './assets/corpse.png'
import Paperwork from './assets/myPaperwork2.png';
import Feedback from './assets/feedback.png';


// css fun
import './App.css';
import './buttons.css'

import 'react-bootstrap-typeahead/css/Typeahead.css';


// HALF OF THIS CODE IS SPAGHETTI, A MESS, IT CAUSES ME HEADACHES, I WILL NOT REFACTOR BECAUSE ITS 1K LINES LONG
// IM SORRY FOR WHOEVER WORKS ON THIS GITHUB REPOSITORY 
// - FROSTYYY
function App() {
    const [formData, setFormData] = useState({
        coronerRank: 'Forensic Attendant',
        placeOfDeath: '',
        department: '',
        dateTime: '',
        serialNumber: '',
        decedentName: '',
        phmcEmployee: '',
        phmcSignature: '',
        pronouncedTimeOfDeath: '',
        synopsis: '',
        probableCauseOfDeath: '',
        mannerOfDeath: '',
        typeOfDeath: '',
        coronerEmployee: '',
        decedentOOC: '',
        scenePhotos: '',
        coronerBadge: '',
        // email stuff
        additionalImages: '',
        requestingOfficer: '',
        coronerDiscord: '',
        coronerPHNumber: '50056',
        deathReport: '',
        additionalReports: [],
        showAdditionalReports: false,
        internalReport: '',
        internalAdditionalReports: '',
        policeNotification: '',
        treatmentLocation: '',
        moreDeathReports: [''],
        // surgical operations fields
        extraStaff: '',
        patientName: '',
        patientConsent: '',
        patientAllergies: '',
        surgeryComplications: '',
        surgeryProcedures: '',
        drugType: '',
        postDrugtype: '',
        surgicalSummery: '',
        surgeryTime: '',
        // physical evaluation fields
        medicalComplications: '',
        treatmentProcedures: '',
        medType: '',
        postTreatment: '',
        medicalSummary: '',
        evalTime: '',
        patientPH: '',
        patientBPM: '',
        patientBMI: '',
        patientTemperature: '',
        patientCareer: '',
        patientHeight: '',
        patientWeight: '',
        patientpulse: '',
        patientOxi: '',
        patientImpairments: '',
        patientPastDiseases: '',
        patientAssessment: '',
        appointmentDate: '',
        // dental fields
        PatientMedicalRecord: '',
        PatientName: '',
        patientChewing: '',
        patientPriority: '',
        patientMedicine: '',
        patientNewMedicine: '',
        patientTreatment: '',
        patientDiagnosis: '',
        patientPrescription: '',
        patientSummary: '',
        date: '',
        // Medical Consultation - Internal Medicine 
        patientRace: '',
        patientDiscord: '',
        race: '',
        patientMedicalRecord: '',
        patientGender: '',
        patientDateofBirth: '',
        patientMedicalHistory: '',
        patientEmail: '',
        patientAddress: '',
        patientEmergencyContact: '',
        patientEmergencyContactNumber: '',
        patientEmergencyContactRelation: '',
        patientBloodType: '',
        patientChronicDiseases: '',
        patientBP: '',
        // New fields for Medical Consultation Internal Medicine 2
        patientResperation: '',
        patientConsultation: '',
        patientPerscription: '',
        patientSummaryConsultation: '',
        patientCondition: '',
        patientNotes: '',
        //gyne stuff
        patientBaggageofParents: '',
        oneFetus: false,
        twoFetuses: false,
        threeFetuses: false,
        fourFetuses: false,
        // New fields for Obstetrics & Gynecology
        patientContractions: '', // Added
        patientBleeding: '', // Added
        patientDiscomfort: '', // Added
        patientFatter: '', // Added
        patientBabyGender: '', // Added
        patientKnowBabyGender: '', // Added
        patientUltraSummary: '', // Added
        patientWellWomanExam: '', // Added
        patientLastWellWomanExam: '', // Added
        patientPapResults: '', // Added
        patientSTI: '', // Added
        patientSTIResults: '', // Added
        patientBloodAnalysis: '', // Added
        patientBloodAnalysisResults: '', // Added
        patientUrine: '', // Added
        patientUrineResults: '', // Added
        patientPap: '', // Added
        patientDateofPregnancy: '', // Added
        patientFetalMeasurements: '', // Added
        patientCurrentMedicine: '', // Missing field for current medications
        patientAdditionalPregnancy: '', // Missing field for previous pregnancies status
        patientJob: '', // Missing field for patient employment
        patientJobTasks: '', // Missing field for job duties
        patientLivingHabits: '', // Missing field for living habits
        patientPreHealth: '', // Missing field for pre-pregnancy health
        patientPregProblems: '', // Missing field for pregnancy problems
        patientPartnerName: '', // Missing field for partner name
        patientPartnerPH: '', // Missing field for partner phone
        patientPartnerDiscord: '', // Missing field for partner discord
        // mental health stuff
        caseOpen: false,
        caseClosed: false,
        violenceToSelf: false,
        violenceToOthers: false,
        LowRisk: false,
        noRisk: true,
        HighRisk: false,
        MediumRisk: false,
        patientFileCreation: '',
        patientVisitReason: '',
        patientSurgicalHistory: '',
        patientMedHistory: '',
        patientPsychDiagnoses: '',
        patientEvalFile: '',
        patientMedicalFile: '',
        patientSubstance: '',
        patientTrauma: ``,
        patientEdu: ``,
        patientDev: ``,
        patientLegal: ``,
        patientSpiritual: ``,
        // Yes / No Values - im really lazy to code something better here
        patientMale: false,
        patientFemale: false,
        patientFormYes: false,
        patientFormNo: false,
        //surgical ops v2 overhaul
        patientComplaint: '',
        triageNoPain: false,
        triageNormalPain: false,
        triageMildPain: false,
        triageSeverePain: false,
        triageCriticalPain: false,
        // surgical ops v2 vitals
        patientTempNormal: false,
        patientTempHigh: false,
        patientTempLow: false,
        patientHeartRateNormal: false,
        patientHeartRateBradycardia: false,
        patientHeartRateTachycardia: false,
        patientBreathingNormal: false,
        patientBreathingSlow: false,
        patientBreathingFast: false,
        patientBreathingObstructed: false,
        patientBloodPressureNormal: false,
        patientBloodPressureHypotension: false,
        patientBloodPressureHypertension: false,


    });
    const [isUploading, setIsUploading] = useState(false);
    const [isJohnDoe, setIsJohnDoe] = useState(false);
    const [isJaneDoe, setIsJaneDoe] = useState(false);
    const [bbCodeVersion, setBbCodeVersion] = useState(1);
    const [notification, setNotification] = useState(null);
    const [commitInfo, setCommitInfo] = useState({ sha: '', date: null });
// Add state near other useState declarations
const [showPHMCModal, setShowPHMCModal] = useState(false);


    useEffect(() => {
        fetch('https://api.github.com/repos/GTAW-PHMC/forms/commits/gh-pages')
            .then(response => response.json())
            .then(data => {
                const commitDate = new Date(data.commit.author.date);
                setCommitInfo({
                    sha: data.sha.substring(0, 7),
                    date: commitDate.toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZoneName: 'short'
                    })
                });
            })
            .catch(error => console.error('Error fetching commit:', error));
    }, []);
    
    const handleImageUpload = async (event, fieldName) => {
        const files = event.target.files;
        if (!files.length) return;

        setIsUploading(true);
        const uploadedUrls = [];

        try {
            for (let file of files) {
                const formData = new FormData();
                formData.append('image', file);

                const response = await fetch(`https://api.imgbb.com/1/upload?key=bc8a1a6273ac8d229eef458de4a31d2d`, {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                if (data.success) {
                    uploadedUrls.push(data.data.url);
                }
            }

            if (uploadedUrls.length > 0) {
                const currentValue = formData[fieldName];
                const newValue = currentValue
                    ? `${currentValue}, ${uploadedUrls.join(', ')}`
                    : uploadedUrls.join(', ');

                setFormData(prev => ({
                    ...prev,
                    [fieldName]: newValue
                }));
                showNotification(`${uploadedUrls.length} image(s) uploaded successfully!`, 'check-circle');
            }
        } catch (error) {
            console.error('Upload failed:', error);
            showNotification('Upload failed!', 'exclamation-circle');
        } finally {
            setIsUploading(false);
        }
    };

    const [showChangelog, setShowChangelog] = useState(false);

    const [coronerList] = useState([
        { name: 'Anne Carter', badge: '4892', rank: 'Chief Medical Examiner', discord: 'ralof.from.riverwood', category: 'Chief Boss' },
        { name: 'Yari Woods', badge: '113472', rank: 'Deputy Chief Medical Examiner', discord: 'westwrld', category: 'Chief Boss'},
        { name: 'Elena Hill', badge: '108273', rank: 'Supervisor Coroner Investigator', discord: 'unity0034', category: 'Supervisor' },
        { name: 'Laurent Hall', badge: '91338854', rank: 'Supervisor Forensic Attendant', discord: 'faethewtich', category: 'Supervisor' },
        { name: 'Chloe Howard', badge: '54372', rank: 'Medical Examiner', discord: 'lovely4ngel', category: 'Medical Examiner' },
        { name: 'Wesley Kramer', badge: '16511', rank: 'Coroner Investigator', discord: 'lucasin16', category: 'Coroner Investigator' },
        { name: 'Roger Rose', badge: '1552', rank: 'Coroner Investigator', discord: 'nazmaldun', category: 'Coroner Investigator'},
        { name: 'Pubert Kennedy', badge: '171763', rank: 'Forensic Attendant', discord: 'mynameiscian', category: 'Forensic Attendant' },
        { name: 'Alyson Frost', badge: '5573', rank: 'Coroner Investigator', discord: 'fr0sty.js' , category: 'Coroner Investigator'},
        { name: 'Justin Moran', badge: '165127', rank: 'Forensic Attendant', discord: 'prankln' , category: 'Forensic Attendant'},
        { name: 'Patrick Boyd', badge: '171368', rank: 'Forensic Attendant', discord: 'vclone0101', category: 'Forensic Attendant' },
        { name: 'Arthur Blackwood', badge: 'NULL/NULL/NULL', rank: 'Medical Examiner', discord: 'deputysmall' , category: 'Medical Examiner'},
        { name: 'Ellie Paisley', badge: '151785', rank: 'Coroner Investigator', discord: 'hoperunsthin' , category: 'Coroner Investigator'},


    ]);

    const [phmcList] = useState([
        // NPC Leadership and Supervisor
        { name: 'Doctor Smith', signature: 'Doctor Smith ', category: '(( NPC DOCTOR ))' },
        { name: 'Evelyn Bleichroder', signature: 'https://i.imgur.com/knYKimz.png', category: 'Leadership' },
        { name: 'Amaya Kim', signature: 'https://i.imgur.com/ZSy7QZs.png', category: 'Leadership' },
        { name: 'Kaden Malik', signature: 'https://i.imgur.com/K9G0mZ9.png', category: 'Leadership' },
        { name: 'Lyla Epps', signature: 'https://i.imgur.com/jvttdmC.png', category: 'Leadership' },
        { name: 'Roan Roybal', signature: 'https://i.imgur.com/vtbmbuT.png', category: 'Leadership' },
        { name: 'Sydney Lear', signature: 'https://i.imgur.com/lASeSxM.png', category: 'Hospital Supervisor' },

        // Physician
        { name: 'Sydney Lear', signature: 'https://i.imgur.com/lASeSxM.png', category: 'Physician' },
        { name: 'Raven Lewis', signature: 'https://i.imgur.com/BwM3SOT.png', category: 'Physician' },
        { name: 'Kaiden Weiner', signature: 'https://i.imgur.com/jDT3FNr.png', category: 'Physician' },
        { name: 'Freya Stiglitz', signature: 'Doctor Freya Stiglitz', category: 'Physician' },
        { name: 'Lyanna Nystrom', signature: '', category: 'Physician' },
        { name: 'August Lancaster', signature: '', category: 'Physician' },
        { name: 'Esme Crawford', signature: '', category: 'Physician Assistant' },
        { name: 'Julie Kang	', signature: '', category: 'Physician Assistant' },

        
        // Misc roles
        { name: 'Gavin Reed	', signature: '', category: 'Pharmacist' },
        { name: 'Sanad Qaqish	', signature: '', category: 'Dentist' },

        // Internal Medicine
        { name: 'Lillian Chandler	', signature: '', category: 'Psychiatrist' },
        { name: 'Ulrica Vacker', signature: '', category: 'Psychiatrist' },
        
        // Psychologist
        { name: 'Julian Leander	', signature: '', category: 'Psychologist' },
        { name: 'Madison Cooper	', signature: '', category: 'Psychologist' },
        { name: 'Paolina Russo	', signature: '', category: 'Psychologist' },
        { name: 'Rahi Badman', signature: '', category: 'Psychologist' },
        { name: 'Sarah Hyun		', signature: '', category: 'Psychologist' },
        // Nurses
        { name: 'Ash Edelweiss		', signature: '', category: 'Nursing' },
        { name: 'Efa Contreras		', signature: '', category: 'Nursing' },
        { name: 'Erika Krieger	', signature: '', category: 'Nursing' },
        { name: 'Jaya Tiwari', signature: '', category: 'Nursing' },
        { name: 'Khinara Bishop	', signature: '', category: 'Nursing' },
        { name: 'Lindsay Thompson	', signature: '', category: 'Nursing' },
        { name: 'Lorena Rojas', signature: '', category: 'Nursing' },
        { name: 'Mireille Simmonds	', signature: '', category: 'Nursing' },
        { name: 'Nina Kim', signature: '', category: 'Nursing' },
        { name: 'Nour Hayek	', signature: '', category: 'Nursing' },
        { name: 'Rayne Krauser	', signature: '', category: 'Nursing' },
        { name: 'Rubina Nerkararyan	', signature: '', category: 'Nursing' },
        { name: 'Sandra Dawson	', signature: '', category: 'Nursing' },
        { name: 'Skylar Marsh', signature: '', category: 'Nursing' },
        { name: 'Tamina Dellavedova	', signature: '', category: 'Nursing' },
        { name: 'Winter Calderone', signature: '', category: 'Nursing' },

    ]);

                                        // First create the priority options array
const priorityOptions = [
    { value: 'patientFormYes', label: 'P1 - Immediate Care' },
    { value: 'patientFormNo', label: 'P2 - Priority' },
    { value: 'patientMale', label: 'P3 - Obvious cavities' }, 
    { value: 'patientFormYes2', label: 'P4 - No obvious cavities' }
  ];
  
  // Replace the existing Form.Select with React-Select
  
    const formatSignature = (signature) => {
        if (!signature) return '';
        return signature.startsWith('http') ? `[img]${signature}[/img]` : signature;
    };
    
// Separate PHMC options
const phmcGroupedOptions = Object.entries(
    phmcList.reduce((groups, employee) => {
        const categoryName = employee.category || 'Uncategorized';
        if (!groups[categoryName]) {
            groups[categoryName] = [];
        }
        groups[categoryName].push({
            value: employee.name,
            label: employee.name,
            signature: employee.signature,
            category: employee.category
        });
        return groups;
    }, {})
).map(([category, options]) => ({
    label: category,
    options: options.sort((a, b) => a.label.localeCompare(b.label))
})).sort((a, b) => {
    const order = {
        'Leadership': 1,
        'Hospital Supervisor': 2
    };
    const orderA = order[a.label] || 99;
    const orderB = order[b.label] || 99;
    
    if (orderA === orderB) {
        return a.label.localeCompare(b.label);
    }
    return orderA - orderB;
});
// First, verify data structure

const coronerGroupedOptions = Object.entries(
    coronerList.reduce((groups, coroner) => {
        const categoryName = coroner.category || 'Uncategorized';
        if (!groups[categoryName]) {
            groups[categoryName] = [];
        }
        groups[categoryName].push({
            value: coroner.name,
            label: `${coroner.name} (${coroner.rank})`,
            badge: coroner.badge,
            rank: coroner.rank,
            discord: coroner.discord,
            category: categoryName
        });
        return groups;
    }, {})
).map(([category, options]) => {
    // Log each category group
    return {
        label: category,
        options: options.sort((a, b) => a.label.localeCompare(b.label))
    };
});

    // Update handleChange function
    
    const handleDoeChange = (type) => (e) => {
        if (type === 'john') {
            setIsJohnDoe(e.target.checked);
            setIsJaneDoe(false);
            if (e.target.checked) {
                setFormData(prev => ({ ...prev, decedentName: 'John Doe' }));
            } else if (formData.decedentName === 'John Doe') {
                setFormData(prev => ({ ...prev, decedentName: '' }));
            }
        } else {
            setIsJaneDoe(e.target.checked);
            setIsJohnDoe(false);
            if (e.target.checked) {
                setFormData(prev => ({ ...prev, decedentName: 'Jane Doe' }));
            } else if (formData.decedentName === 'Jane Doe') {
                setFormData(prev => ({ ...prev, decedentName: '' }));
            }
        }
    };


    const departmentFullName = (abbreviation) => {
        switch (abbreviation) {
            case 'LSPD':
                return 'Los Santos Police Department';
            case 'LSFD':
                return 'Los Santos Fire Department';
            case 'LSSD':
                return 'Los Santos Sheriff Department';
            case 'PHMC':
                return 'Pillbox Hill Medical Center';
            case 'SANFIRE':
                return 'San Andreas Department of Forestry and Fire Protection';
            case 'SADCR':
                return 'San Andreas Department of Corrections and Rehabilitation';
            case 'LSGOV':
                return 'Los Santos City Government';
            case '911 Call':
                return 'Emergency 911 Dispatch Center';
            case 'Protech':
                return 'ProTech Security Solutions';
            default:
                return '';
        }
    };
    function getBrowserName(userAgent) {
        if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
            return "Google Chrome";
        } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
            return "Safari";
        } else if (userAgent.includes("Firefox")) {
            return "Mozilla Firefox";
        } else if (userAgent.includes("Edg")) {
            return "Microsoft Edge";
        } else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
            return "Internet Explorer";
        } else {
            return "Unknown Browser";
        }
    }

    const generateDeath = () => {
        const {
            coronerRank,
            placeOfDeath,
            department,
            dateTime,
            coronerEmployee,
            coronerBadge,
            decedentName,
            decedentOOC,
            pronouncedTimeOfDeath,
            synopsis,
            probableCauseOfDeath,
            mannerOfDeath,
            typeOfDeath,
            scenePhotos,
            additionalImages,
            morgueStatus
        } = formData;

        const scenePhotosBBCode = scenePhotos.split(',').map(photo => `[img]${photo.trim()}[/img]`).join('\n');
        const additionalImagesBBCode = additionalImages.split(',').map(photo => `[img]${photo.trim()}[/img]`).join('\n');
        // Base BBCode for ID 1
        const bbCode = `[divbox=transparent][center][img]https://i.imgur.com/Hxjt4M2.png[/img][/center][/divbox]

[divbox=transparent][br][/br][center]DEATH INVESTIGATION REPORT[/center]
[hr][/hr]

[center][b]A. WRITTEN REPORT[/b][/center]

The County Coroner's Office has been called regarding the decease that occurred at the location of [b]${placeOfDeath}[/b]. Upon receiving the call from[b] ${departmentFullName(department)}[/b], Coroner's Office dispatched a ${coronerRank} to the crime scene to conduct an investigation on the [b]${dateTime}[/b].

The ${coronerRank}, [b]${coronerEmployee}[/b], Serial Number [b]${coronerBadge}[/b], arrived at the scene and identified the individual as [b]${decedentName}[/b], who was pronounced dead at [b]${pronouncedTimeOfDeath}[/b]. Following an initial investigation, The ${coronerRank} came up with the following [b]synopsis[/b]: ${synopsis}

Based on the information gathered from the scene investigation and the decedent's medical history (if available), the probable cause of death was determined to be [b]${probableCauseOfDeath}[/b]. The manner of death was classified as [b]${mannerOfDeath}[/b].
[/divbox]
[divbox=transparent][center][b]B. PHOTOGRAPHIC DOCUMENTARY RECORD[/b][/center]
[hr][/hr]
[center][size=85][b][u]SCENE PHOTOGRAPHY[/u][/b][/size][/center]
${scenePhotosBBCode}
[/divbox]

[divbox=transparent]
[center][b]C. STATEMENT[/b][/center]
[hr][/hr]
[size=85]As a ${coronerRank}, I have made detailed notes of my findings and conclusions, and these notes are available for review if necessary. However, I must note that these notes do not contain any personal opinions and are solely based on the evidence and facts available to me.

In conclusion, I hope that this report provides the necessary information required for the agency to move forward with any necessary actions. Please let me know if you require any additional information or if I can be of further assistance.

I certify that the information contained in this report is true and accurate to the best of my knowledge and belief. I have reviewed the report and ensured that all information included is complete and accurate. [/size][/divbox]

[divbox=transparent]
[center][b]D. PRIVACY AND CONFIDENTIALITY[/b][/center]
[hr][/hr]
[center][size=85]This document from the Forensic Medicine and Pathology Department of Pillbox Hill Medical Center certifies the authenticity of the information contained within. Any unauthorized distribution or use of this information is in violation of the Health Insurance Portability and Accountability Act (HIPAA), as well as state and federal privacy laws, including but not limited to the San Andreas Confidentiality of Medical Information Act (CMIA) and the San Andreas Information Practices Act (IPA).

It is imperative that all parties handling this document respect the privacy and confidentiality of the decedent and their family. Any violation of these laws may result in legal action being taken against the responsible parties.

This document is provided for official purposes only and is not to be construed as legal advice or medical diagnosis. If additional information or clarification is needed, please contact the Forensic Medicine and Pathology Department of Pillbox Hill Medical Center.[/size][/divbox]

[divbox=transparent][center][b][u](( OUT OF CHARACTER IMAGES ))[/u][/b][/center][hr][/hr]

This section clarifies whether or not if the player was character killed or player killed. 
In this case the player was; ${typeOfDeath}
Player OOC Name: ${decedentOOC}
${formData.morgueStatus === 'true' ? '[b][color=red](( The Morgue Screen is currently bugged and we unfortunately cannot pull Morgue Screen images )) [/color][/b]' : ''}
Morgue screen, cinjuries, cdna links: 
[size=85][u] THESE IMAGES ARE [B]OUT OF CHARACTER[/B] FOR INTERNAL RECORDS, DO NOT USE THESE AS EVIDENCE. [/u][/size]
${additionalImagesBBCode}

[/divbox]
`;

        return bbCode;
    };

    const generateEmail = () => {
        const {
            requestingOfficer,
            department,
            coronerEmployee,
            coronerRank,
            coronerDiscord,
            coronerPHNumber,
            deathReport,
            additionalReports,
        } = formData;

        // Base BBCode for ID 2
        let bbCode = `[center][img]https://i.imgur.com/ItaoQkO.png[/img][/center]
[hr][/hr]
    
TO: ${requestingOfficer} - ${department}
FROM: ${coronerEmployee} @ phmc.health
SUBJECT: Death Report Paperwork

For the attention of: [b]${department}[/b] - [b]${requestingOfficer}[/b]

This Coroner Report has been written by ${coronerRank} ${coronerEmployee} you can find the enclosed documents attached to this email. 

[b]AUTOPSY INFORMATION / REQUEST(S)[/B] 
If you require an autopsy, please follow this link and follow the instructions: [url=https://phmc.gta.world/viewforum.php?f=265]Autopsy Portal[/url].


[altspoiler=Request a Autopsy FAQ]
1) How do I request an autopsy report and/or a death certificate?
Autopsies and death certificates can aid in various situations, especially whenever the cause of death plays a vital role in. Our professionals attempt to handle each and every request in a timely manner. However, given the fact that the effort of documentation is immense, a request fee is associated along with it. Upon its payment, the report or certificate will be sent to you directly.


2) Is there a fee associated with the request process?
Yes, there is a $2,000 fee associated with the request. This fee covers administrative costs related to processing and maintaining your requested report/certificate securely within our systems. It ensures the continued improvement of our services, maintaining the highest standards in healthcare data management.


3) How do I pay the $2,000 request fee?
To pay your $2,000 request fee, please log into the banking website and navigate to the "Payment" section. Select your preferred payment method (e.g., credit card, debit card), insert our routing number (020000062), enter the required payment details, review the transaction, and confirm your payment. (( Type /transfer 2000 020000062 ))

(( Autopsies for Player Kills (PK) and Character Kills (CK) will only be accepted if they are deemed strictly necessary and relevant to an important case or investigation. Prior to making a request for such an autopsy, a member of the Medical-Examiners must be notified and consulted with. Furthermore, it is mandatory to provide information about /cdamages and /cexamine. In the event that this information is not available, please do not hesitate to contact an administrator in-game, who can provide it. If these steps are not followed, an automatic denial will cause your request to be archived.

Also if it is a PK, please be sure to use John/Jane Doe with their character name in OOC brackets . Ex: John Doe (( James Smith ))

[url=https://phmc.gta.world/ucp.php?i=pm&mode=compose&g=50]Click here to contact a Medical-Examiner to get the green light![/url] ))
[/altspoiler]
If you have further enquiries, feel free to reach out to the following individual:
[list] ${coronerEmployee}
[*] Phone Number: ${coronerPHNumber}
[*] (( Discord: ${coronerDiscord} ))[/list]

[altspoiler=Coroner Report]
${deathReport}
[code]
${deathReport}

[/code]
[/altspoiler]
${additionalReports && additionalReports.length > 0
                ? additionalReports
                    .filter(report => report.trim())
                    .map((report, index) => `
[altspoiler=Coroner Report - Additional ${index + 1}]
${report}
[code]
${report}
[/code]
[/altspoiler]`).join('\n\n')
                : ''
            }

Kind regards
${coronerRank} ${coronerEmployee}
Pillbox Hill Medical Center - Pathology  and Forensic Medicine

[size=75]The content of this email is intended for the person or entity to which it is addressed only. This email may contain confidential information. If you are not the person to whom this message is addressed, be aware that any use, reproduction, or distribution of this message is strictly prohibited. If you received this in error, please contact the sender and immediately delete this email and any attachments.[/size]`;

        return bbCode;
    };
    // Medical Consultation (Internal Medicine) | Base BBCode for ID 3
    const generateMedConsultIntMedMain = () => {
        const {
            phmcEmployee,
            patientName,
            patientMedicalRecord,
            patientGender,
            patientDateofBirth,
            patientEmail,
            patientAddress,
            patientEmergencyContact,
            patientEmergencyContactNumber,
            patientEmergencyContactRelation,
            patientBloodType,
            patientChronicDiseases,
            patientPH,
            patientAllergies,
        } = formData;


        let bbCode = `[divbox=transparent] [center] [img]https://i.imgur.com/bUn7H8J.png[/img] [/center] [/divbox]
[divbox=lightgrey] [color=#800000][b]Section 1. Medical Patient Record[/b][/color] [/divbox]
[divbox=transparent] [list=none] [b]1.1.[/b] Patient Number: ${patientMedicalRecord}
[b]1.2.[/b] Completed by: ${phmcEmployee}
[/list][/divbox]
[divbox=lightgrey] [color=#800000][b]Section 2. Patient Demographics[/b][/color] [/divbox]
[divbox=transparent] [list=none] [b]2.1.[/b] Full Name: ${patientName}
[b]2.2.[/b] Sex: ${patientGender}
[b]2.3.[/b] Date Of Birth: ${patientDateofBirth}
[b]2.4.[/b] Telephone Number: ${patientPH}
[b]2.5.[/b] E-Mail: ${patientEmail}
[b]2.6.[/b] Home Address: ${patientAddress}
[/list][/divbox]
[divbox=lightgrey] [color=#800000][b]Section 3. Emergency Contact Information[/b][/color] [/divbox]
[divbox=transparent] [list=none] [b]3.1.[/b] Contact Name: ${patientEmergencyContact}
[b]3.2.[/b] Telephone Number: ${patientEmergencyContactNumber}
[b]3.3.[/b] Relation to Patient: ${patientEmergencyContactRelation}
[/list][/divbox]
[divbox=lightgrey] [color=#800000][b]Section 4. Health Status Information[/b][/color] [/divbox]
[divbox=transparent] [list=none] [b]4.1.[/b] Blood type: ${patientBloodType}
[b]4.2.[/b] Known Chronic Diseases: ${patientChronicDiseases}
[b]4.3.[/b] Known Allergies: ${patientAllergies}
[/list][/divbox]
`;

        return bbCode;
    };

    // Base BBCode for ID 4
    const generateDental = () => {
        const {
            PatientMedicalRecord,
            PatientName,
            patientWeight,
            patientChewing,
            patientDateofBirth,
            patientMedicine,
            patientNewMedicine,
            patientTreatment,
            patientDiagnosis,
            patientPrescription,
            patientSummary,
            phmcEmployee,
            date,
        } = formData;

        let bbCode = `[divbox=lightgrey][size=150]

[center][b]DEPARTMENT OF DENTAL MEDICINE[/b]
[color=#800000][b]DENTAL CONSULTATION[/b][/color][/center][/size]

[/divbox]

[divbox=lightgrey][b]SECTION 0: PERSONAL INFORMATION[/b][/divbox]
[divbox=transparent][table][tr][td][b]0.1[/b] Identifying
[/td][td]
[b]Medical Record Number:[/b] ${PatientMedicalRecord}
[b]Full Name:[/b] ${PatientName}
[b]Date Of Birth:[/b] ${patientDateofBirth}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 1: PATIENT MEASUREMENTS[/b][/divbox]
[divbox=transparent][table][tr][td][b]1.1[/b] Weight[/td][td]
${patientWeight}

[tr][td][b]1.2[/b] Problems With Chewing & Swallowing[/td][td]
${patientChewing}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 2: PRIORITY CLASSIFICATION[/b][/divbox]
[divbox=transparent][table][tr][td][b]2.1[/b] Priority Criteria [/td][td]
[cb${formData.patientFormYes ? 'c' : ''}][/cb${formData.patientFormYes ? 'c' : ''}] Priority 1: Immediate care
[cb${formData.patientFormNo ? 'c' : ''}][/cb${formData.patientFormNo ? 'c' : ''}] Priority 2: Extensive amount of decay
[cb${formData.patientMale ? 'c' : ''}][/cb${formData.patientMale ? 'c' : ''}] Priority 3: Obvious cavities
[cb${formData.patientFormYes2 ? 'c' : ''}][/cb${formData.patientFormYes2 ? 'c' : ''}] Priority 0: No obvious cavities

[/table][/divbox]

[divbox=lightgrey][b]SECTION 3: MEDICATIONS[/b][/divbox]
[divbox=transparent][table][tr][td][b]3.1[/b] Current Medications[/td][td]
${patientMedicine}

[tr][td][b]3.2[/b] New Medications[/td][td]
${patientNewMedicine}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 4: DIAGNOSIS[/divbox]
[divbox=transparent][table]

[tr][td][b]4.1[/b] Mark Tooth Decay Area[/td][td]
[img]https://i.imgur.com/31wOMlD.jpeg[/img]

[tr][td][b]4.2[/b] Diagnosed With[/td][td]
${patientDiagnosis}

[tr][td][b]4.3[/b] Treatment[/td][td]
${patientTreatment}

[tr][td][b]4.4[/b] Prescription[/td][td]
${patientPrescription}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 5: SUMMARY OF CONSULTATION[/b][/divbox]
[divbox=transparent][list=none]

${patientSummary}

[/divbox][divbox=lightgrey][b]SECTION 6: PERSON IN CHARGE OF THE CONSULTATION[/b][/divbox]

[divbox=transparent][table][tr][td][b]6.1[/b] Full Name (Signature)[/td][td] ${phmcEmployee}
[tr][td][b]6.2[/b] Full Name (Print)[/td][td]${phmcEmployee}
[tr][td][b]6.3[/b] Date[/td][td]${date}[/table][/divbox]`;

        return bbCode;
    };

    // Add new generation Surgical Ops function 5
    const generateSurgicalOps = () => {
        const {
            phmcEmployee,
            extraStaff,
            patientName,
            patientMedicine,
            patientConsent,
            patientMedicalRecord,
            patientAllergies,
            surgeryComplications,
            surgeryProcedures,
            drugType,
            postDrugtype,
            surgicalSummery,
            surgeryTime,
        } = formData;

        let bbCode = `[divbox=transparent] [center] [img]https://i.imgur.com/bUn7H8J.png[/img] [/center] [/divbox]
[divbox=lightgrey][size=150]

[center][b]OPERATIVE REPORT
PILLBOX HILL MEDICAL CENTER[/b]
[size=50][i]Elgin Avenue, Pillbox Hill, Los Santos, SA[/i][/size][/center][/size]

[/divbox][divbox=transparent][justify]

[divbox=lightgrey][b]SECTION 1: PERSONNEL[/b][/divbox]
[divbox=transparent][table][tr][td][b]1.1: [/b] Lead Surgeon[/td][td]
${phmcEmployee}
[/td][/tr]

[tr][td][b]1.2: [/b] Additional Staff (Leave N/A if NPCed)[/td][td]
${extraStaff}
[/td][/tr]

[tr][td][b]1.3: [/b] Patient Name[/td][td]
${patientName}
[/td][/tr]

[tr][td][b]1.3: [/b] Medical Record Number[/td][td]
${patientMedicalRecord}
[/td][/tr]

[/table][/divbox]

[divbox=lightgrey][b]SECTION 2: SURGICAL INQUIRY[/b][/divbox]
[divbox=transparent][table]

[tr][td][b]2.1: [/b]Did the patient or their family consent, or did they have a life threatening or severe injury that requires immediate surgical intervention?[/td][td]
${patientConsent}
[/td][/tr]

[tr][td][b]2.2: [/b]Did any medical complications occur during the surgery?[/td][td]
${surgeryComplications}
[/td][/tr]

[tr][td][b]2.3: [/b]Was the procedure completed successfully, and did it result in the desired clinical outcome?[/td][td]
${surgeryProcedures}
[/td][/tr]

[/table][/divbox]

[divbox=lightgrey][b]SECTION 3: POST-ANESTHESIA REPORT[/b][/divbox]
[divbox=transparent][table]

[tr][td][b]3.1: [/b]Known Current Medication:[/td][td]${patientMedicine}

[/td][/tr]

[tr][td][b]3.2: [/b]Known Allergies:[/td][td]${patientAllergies}

[/td][/tr]

[tr][td][b]3.3: [/b]Type & Dosage of Anesthesia Administered:[/td][td]${drugType}
[/td][/tr]

[tr][td][b]3.4: [/b]Post-Operative Anesthesia Details:[/td][td]${postDrugtype}
[/td][/tr]

[/table][/divbox]

[divbox=lightgrey][b]SECTION 4: SUMMARY OF SURGICAL PROCEDURE PERFORMED[/b][/divbox]
[divbox=transparent][list=none]

${surgicalSummery}

[/list][/divbox][divbox=lightgrey][b]SECTION 5: SIGNATURE OF THE LEAD SURGEON[/b][/divbox]

[divbox=transparent][table][tr][td][b]5.1[/b] Full name (Signature)[/td][td]${phmcEmployee}[/td][/tr]
[tr][td][b]5.2[/b] Full Name (Print)[/td][td]${phmcEmployee}
[tr][td][b]5.3[/b] Date of Surgery[/td][td]${surgeryTime}[/table][/divbox]
`;

        return bbCode;
    };

    // Base BBCode for ID 6 Physical Evaluation (Internal Medicine)

    const generatePhysEvalInternalMed = () => {
        const {
            phmcEmployee,
            patientName,
            patientDateofBirth,
            patientGender,
            patientMedicine,
            patientAllergies,
            patientHeight,
            patientWeight,
            patientRace,
            patientBMI,
            patientTemperature,
            patientBPM,
            patientpulse,
            patientDiscord,
            patientOxi,
            patientBP,
            patientCareer,
            patientImpairments,
            patientPastDiseases,
            patientAssessment,
            appointmentDate,
            patientPH
        } = formData;

        let bbCode = `[divbox=transparent] [center] [img]https://i.imgur.com/bUn7H8J.png[/img] [/center] [/divbox]
[divbox=lightgrey][size=150]

[center][b]DEPARTMENT OF INTERNAL MEDICINE
PILLBOX HILL MEDICAL CENTER[/b]
[size=50][i]Elgin Avenue, Pillbox Hill, Los Santos, SA[/i][/size][/center][/size]

[/divbox][divbox=transparent][justify]

[i]To provide guidance for workforce members at Pillbox Hill Medical Center regarding the use and disclosure of Protected Health Information in accordance with applicable law. It is the policy that all Protected Health Information be used and disclosed in accordance with applicable San Andreas and federal law, and in the best interests of the patient. "Disclose" and "Disclosure" means the release of, transfer of, provision of, access to, or divulging in any manner, of Protected Health Information outside of Pillbox Hill Medical Center or to persons other than its workforce members. Disclosure means a release to persons or entities other than to the patient who is the subject of the information.[/i]


[/justify][/divbox]

[divbox=lightgrey][b]SECTION 0: PERSONAL INFORMATION[/b][/divbox]
[divbox=transparent][table][tr][td]Identifying
Information[/td][td]
[b]Name:[/b] ${patientName}
[b]DOB:[/b] ${patientDateofBirth}
[b]Sex:[/b] ${patientGender}
[b]Race:[/b] ${patientRace}
[/td][/tr][tr][td]Contact
Information[/td]
[td][b]Telephone Number:[/b] ${patientPH}
[b]Email:[/b] ${patientDiscord}
[/td][/tr]
[tr][td]Examination
Information[/td][td]
[b]Date of Examination:[/b] ${appointmentDate}
[b]Personnel in Charge of Examination:[/b] ${phmcEmployee}
[/td][/tr][/table][/divbox]

[divbox=lightgrey][b]SECTION 1: PATIENT MEASUREMENTS[/b][/divbox]
[divbox=transparent][table][tr][td][b]1.1[/b] Height[/td][td]
${patientHeight}
[/td][/tr]

[tr][td][b]1.2[/b] Weight[/td][td]
${patientWeight}
[/td][/tr]

[tr][td][b]1.3[/b] Body Mass Index[/td][td]
Index Value:
${patientBMI}
[/td][/tr]

[/table][/divbox]

[divbox=lightgrey][b]SECTION 2: VITALS[/b][/divbox]
[divbox=transparent][table][tr][td][b]2.1[/b] Body Temperature[/td][td]
${patientTemperature}
[/td][/tr]

[tr][td][b]2.2[/b] Heart Rate[/td][td]
${patientBPM} BPM
[/td][/tr]

[tr][td][b]2.3[/b] Respiration Rate[/td][td]
${patientpulse} BPM
[/td][/tr]

[tr][td][b]2.4[/b] Pulse Oximetry[/td][td]
${patientOxi} %
[/td][/tr]

[tr][td][b]2.5[/b] Blood Pressure[/td][td]
${patientBP} MMHG
[/td][/tr]

[/table][/divbox]

[divbox=lightgrey][b]SECTION 3: PATIENT ANAMNESIS[/b][/divbox]
[divbox=transparent][table]

[tr][td][b]3.1[/b] Patient had a job in the past[/td][td]
${patientCareer}
[/td][/tr]

[tr][td][b]3.2[/b] Were other medical condition(s) or physical impairments found that would preclude the patient from rigorous duties[/td][td]
${patientImpairments}
[/td][/tr]

[tr][td][b]3.3[/b] Patient has allergies/risks (implants, case of incompatibility, pacemaker, etc.)[/td][td]
${patientAllergies}
[/td][/tr]

[tr][td][b]3.4[/b] Patient takes medication on a regular basis[/td][td]
${patientMedicine}
[/td][/tr]

[tr][td][b]3.5[/b] Patient or family members have the following diseases: [/td][td]
${patientPastDiseases}
[/td][/tr]

[/table][/divbox]

[divbox=lightgrey][b]SECTION 4: ASSESSMENT SUMMARY[/b][/divbox]
[divbox=transparent][list=none]

${patientAssessment}
[/list][/divbox][divbox=lightgrey][b]SECTION 5: SIGNATURE OF PERSON IN CHARGE OF EXAMINATION[/b][/divbox]

[divbox=transparent][table][tr][td]Examiner's Signature:[/td][td]${phmcEmployee}[/td][/tr][/table][/divbox]
`;

        return bbCode;
    };

    const generateMedConsultIntMedReply = () => {
        const {
            phmcEmployee,
            patientName,
            patientMedicalRecord,
            patientResperation,
            patientDateofBirth,
            patientpulse,
            patientWeight,
            patientCurrentMedicine,
            patientNewMedicine,
            patientConsultation,
            patientTreatment,
            patientTemperature,
            patientBPM,
            patientBP,
            patientDiagnosis,
            patientSummaryConsultation,
            patientPerscription,
            patientHeight,
            phmcSignature,
            date,
        } = formData;

        let bbCode = `[divbox=lightgrey][size=150]

[center][b]DEPARTMENT OF INTERNAL MEDICINE[/b]
[color=#800000][b]MEDICAL CONSULTATION[/b][/color][/center][/size]

[/divbox]

[divbox=lightgrey][b]SECTION 0: PERSONAL INFORMATION[/b][/divbox]
[divbox=transparent][table][tr][td][b]0.1[/b] Identifying
[/td][td]
[b]Medical Record Number:[/b] ${patientMedicalRecord}
[b]Full Name:[/b] ${patientName}
[b]Date Of Birth:[/b] ${patientDateofBirth}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 1: PATIENT MEASUREMENTS[/b][/divbox]
[divbox=transparent][table][tr][td][b]1.1[/b] Height[/td][td]
${patientHeight}

[tr][td][b]1.2[/b] Weight[/td][td]
${patientWeight}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 2: VITALS[/b][/divbox]
[divbox=transparent][table][tr][td][b]2.1[/b] Body Temperature[/td][td]
${patientTemperature}

[tr][td][b]2.2[/b] Heart Rate[/td][td]
${patientBPM}

[tr][td][b]2.3[/b] Respiration Rate[/td][td]
${patientResperation}

[tr][td][b]2.4[/b] Pulse Oximetry[/td][td]
${patientpulse}

[tr][td][b]2.5[/b] Blood Pressure[/td][td]
${patientBP}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 3: MEDICATIONS[/b][/divbox]
[divbox=transparent][table][tr][td][b]3.1[/b] Current Medications[/td][td]
${patientCurrentMedicine}

[tr][td][b]3.2[/b] New Medications[/td][td]
${patientNewMedicine}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 4: DIAGNOSIS[/divbox]
[divbox=transparent][table]

[tr][td][b]4.1[/b] Viewed For[/td][td]
${patientConsultation}

[tr][td][b]4.2[/b] Diagnosed With[/td][td]
${patientDiagnosis}

[tr][td][b]4.3[/b] Treatment[/td][td]
${patientTreatment}

[tr][td][b]4.4[/b] Prescription[/td][td]
${patientPerscription}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 5: SUMMARY OF CONSULTATION[/b][/divbox]
[divbox=transparent][list=none]

${patientSummaryConsultation}

[/divbox][divbox=lightgrey][b]SECTION 6: PERSON IN CHARGE OF THE CONSULTATION[/b][/divbox]

[divbox=transparent][table][tr][td][b]6.1[/b] Full Name (Signature)[/td][td]${formatSignature(phmcSignature)}
[tr][td][b]6.2[/b] Full Name (Print)[/td][td]${phmcEmployee}
[tr][td][b]6.3[/b] Date[/td][td]${date}[/table][/divbox]
`;

        return bbCode;
    };
    const generateMedConsultEmergencyMedForm = () => {
        const {
            patientEmergencyContact,
            patientEmergencyContactNumber,
            patientEmergencyContactRelation,
            patientPH,
            patientEmail,
            patientAddress,
            patientChronicDiseases,
            patientName,
            patientMedicalRecord,
            patientBloodType,
            patientDateofBirth,
            patientAllergies,
        } = formData;

        let bbCode = `[divbox=grey][center][img]https://i.imgur.com/s5acD6S.png[/img][/center][/divbox]
[divbox=lightgrey] [color=#800000][b]Section 1. Medical Patient Record[/b][/color] [/divbox]
[divbox=transparent] [list=none] [b]1.1.[/b] Patient Number: ${patientMedicalRecord}
[/list][/divbox]
[divbox=lightgrey] [color=#800000][b]Section 2. Patient Demographics[/b][/color] [/divbox]
[divbox=transparent] [list=none] [b]2.1.[/b] Full Name: ${patientName}
[b]2.2.[/b] Sex:
[list=none][cb${formData.patientMale ? 'c' : ''}]PUT CBC IF APPLICABLE[/cb${formData.patientMale ? 'c' : ''}] Male
[cb${formData.patientFemale ? 'c' : ''}]PUT CBC IF APPLICABLE[/cb${formData.patientFemale ? 'c' : ''}] Female[/list]
[b]2.3.[/b] Date Of Birth: ${patientDateofBirth}
[b]2.4.[/b] Telephone Number: ${patientPH}
[b]2.5.[/b] E-Mail: ${patientEmail}
[b]2.6.[/b] Home Address: ${patientAddress}
[/list][/divbox]
[divbox=lightgrey] [color=#800000][b]Section 3. Emergency Contact Information[/b][/color] [/divbox]
[divbox=transparent] [list=none] [b]3.1.[/b] Contact Name: ${patientEmergencyContact}
[b]3.2.[/b] Telephone Number: ${patientEmergencyContactNumber}
[b]3.3.[/b] Relation to Patient: ${patientEmergencyContactRelation}
[/list][/divbox]
[divbox=lightgrey] [color=#800000][b]Section 4. Health Status Information[/b][/color] [/divbox]
[divbox=transparent] [list=none] [b]4.1.[/b] Blood type: ${patientBloodType}
[b]4.2.[/b] Known Chronic Diseases: ${patientChronicDiseases}
[b]4.3.[/b] Known Allergies: ${patientAllergies}
[/list][/divbox]
    `;

        return bbCode;
    };
    const generateMedConsultEmergencyMedForm2 = () => {
        const {
            phmcEmployee,
            patientName,
            patientMedicalRecord,
            patientResperation,
            patientCondition,
            patientDateofBirth,
            patientBPM,
            patientOxi,
            patientCurrentMedicine,
            patientNewMedicine,
            patientConsultation,
            patientTreatment,
            patientTemperature,
            patientNotes,
            patientBP,
            patientDiagnosis,
            patientSummaryConsultation,
            phmcSignature,
            date,
        } = formData;

        let bbCode = `[divbox=lightgrey][size=150]

[center][b]DEPARTMENT OF EMERGENCY MEDICINE[/b]
[color=#800000][b]EMERGENCY CONSULTATION[/b][/color][/center][/size]

[/divbox]

[divbox=lightgrey][b]SECTION 0: PERSONAL INFORMATION[/b][/divbox]
[divbox=transparent][table][tr][td][b]0.1[/b] Identifying
[/td][td]
[b]Medical Record Number:[/b] ${patientMedicalRecord}
[b]Full Name:[/b] ${patientName}
[b]Date Of Birth:[/b] ${patientDateofBirth}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 1: PATIENT'S CONDITION[/b][/divbox]
[divbox=transparent][table][tr][td][b]1.1[/b] State of consciousness[/td][td]
${patientCondition}
[/table][/divbox]

[divbox=lightgrey][b]SECTION 2: VITALS[/b][/divbox]
[divbox=transparent][table][tr][td][b]2.1[/b] Body Temperature[/td][td]
${patientTemperature}

[tr][td][b]2.2[/b] Heart Rate[/td][td]
${patientBPM}

[tr][td][b]2.3[/b] Respiration Rate[/td][td]
${patientResperation}

[tr][td][b]2.4[/b] Pulse Oximetry[/td][td]
${patientOxi}

[tr][td][b]2.5[/b] Blood Pressure[/td][td]
${patientBP}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 3: MEDICATIONS[/b][/divbox]
[divbox=transparent][table][tr][td][b]3.1[/b] Current Medications[/td][td]
${patientCurrentMedicine}

[tr][td][b]3.2[/b] New Medications[/td][td]
${patientNewMedicine}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 4: DIAGNOSIS[/divbox]
[divbox=transparent][table]

[tr][td][b]4.1[/b] Presenting Problems [size=80][color=#800000][i]Why is the patient here?[/i][/color][/size][/td][td]
${patientConsultation}

[tr][td][b]4.2[/b] Diagnosed With [size=80][color=#800000][i]What is the most likely diagnosis?[/i][/color][/size][/td][td]
${patientDiagnosis}

[tr][td][b]4.3[/b] Treatment/Epicrisis [size=80][color=#800000][i]What should be done? e.g. Admission, Procedures, Follow-up, Discharge and rest at home[/i][/color][/size][/td][td]
${patientTreatment}

[tr][td][b]4.4[/b] Additionals [size=80][color=#800000][i]Lab results, allergies, physicial condition, pre-existing diseases[/i][/color][/size][/td][td]
${patientNotes}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 5: SUMMARY OF CONSULTATION[/b][/divbox]
[divbox=transparent][list=none]

${patientSummaryConsultation}

[/divbox]

[divbox=lightgrey][b]SECTION 6: PERSON IN CHARGE OF THE CONSULTATION[/b][/divbox]

[divbox=transparent][table][tr][td][b]7.1[/b] Full Name (Signature)[/td][td]${formatSignature(phmcSignature)}
[tr][td][b]7.2[/b] Full Name (Print)[/td][td]${phmcEmployee}
[tr][td][b]7.3[/b] Date[/td][td]${date}[/table][/divbox]
    `;

        return bbCode;
    };
    const generateObsMainFile = () => {
        const {
            phmcEmployee,
            patientName,
            patientMedicalRecord,
            patientJob,
            patientPartnerPH,
            patientDateofBirth,
            patientPartnerName,
            patientJobTasks,
            patientLivingHabits,
            patientPreHealth,
            patientBaggageofParents,
            patientTemperature,
            patientBP,
            patientWeight,
            patientSummaryConsultation,
            patientBPM,
            patientResperation,
            patientOxi,
            patientDateofPregnancy,
            patientFetalMeasurements,
            patientWellWomanExam,
            patientPapResults,
            patientSTI,
            patientSTIResults,
            patientHeight,
            patientBloodAnalysis,
            patientBloodAnalysisResults,
            patientUrine,
            patientUrineResults,
            date,
            patientPap,
            patientPartnerDiscord,
            phmcSignature,
            patientAdditionalPregnancy,
            patientPregProblems,
        } = formData;

        let bbCode = `[divbox=transparent] [center] [img]https://i.imgur.com/bUn7H8J.png[/img] [/center] [/divbox]
[divbox=lightgrey][size=150]

[center][b]DEPARTMENT OF OBSTETRICS AND GYNECOLOGY[/b][/center][/size]

[/divbox]

[divbox=lightgrey][b]SECTION 0: PERSONAL INFORMATION[/b][/divbox]
[divbox=transparent][table][tr][td][b]0.1[/b] Identifying
[/td][td]
[b]Medical Record Number:[/b] ${patientMedicalRecord}
[b]Full Name:[/b] ${patientName}
[b]Date of Birth:[/b] ${patientDateofBirth}
[tr][td][b]0.2[/b] Partner
[/td][td][b]Full Name:[/b] ${patientPartnerName}
[b]Telephone Number:[/b] ${patientPartnerPH}
[b]Email:[/b] ${patientPartnerDiscord}
[/td][/tr][tr][td][b]0.3[/b] Job
[/td][td][b]Employer:[/b] ${patientJob}
[b]Tasks:[/b] ${patientJobTasks}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 1: HEALTH STORY[/b][/divbox]
[divbox=transparent][table]

[tr][td][b]1.1[/b] Pre-Pregnancy Health 
[i](Health problems, medications, allergies, surgical procedures, problems related to anesthesia, depression, etc.)[/i][/td][td]
${patientPreHealth}

[tr][td][b]1.2[/b] Previous Pregnancies
[i](If yes, specify if she has had miscarriages and/or abortions.)[/i][/td][td]
${patientAdditionalPregnancy} [/td][/tr]

[tr][td][b]1.3[/b] Hereditary Baggage Of Parents[/td][td]
${patientBaggageofParents}

[tr][td][b]1.4[/b] Previous Gynecological Problems[/td][td]
${patientPregProblems}[/td][/tr]

[tr][td][b]1.5[/b] Patient's Living Habits
[i](Diet, physical activity, smoking, alcohol and drugs.)[/i][/td][td]
${patientLivingHabits}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 2: PATIENT MEASUREMENTS[/b][/divbox]
[divbox=transparent][table][tr][td][b]2.1[/b] Height[/td][td]
${patientHeight}

[tr][td][b]2.2[/b] Weight[/td][td]
${patientWeight}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 3: VITALS[/b][/divbox]
[divbox=transparent][table][tr][td][b]3.1[/b] Body Temperature[/td][td]
${patientTemperature}

[tr][td][b]3.2[/b] Heart Rate[/td][td]
${patientBPM}

[tr][td][b]3.3[/b] Respiration Rate[/td][td]
${patientResperation}

[tr][td][b]3.4[/b] Pulse Oximetry[/td][td]
${patientOxi}

[tr][td][b]3.5[/b] Blood Pressure[/td][td]
${patientBP}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 4: ABDOMINAL OR TRANSVAGINAL ULTRASONOGRAPHY[/b][/divbox]
[divbox=transparent][table][tr][td][b]4.1[/b] Dating Of Pregnancy[/td][td]
${patientDateofPregnancy}

[tr][td][b]4.2[/b] Identification Of Multiple Pregnancies[/td][td]
[cb${formData.oneFetus ? 'c' : ''}][/cb${formData.oneFetus ? 'c' : ''}] 1 Fetus
[cb${formData.twoFetuses ? 'c' : ''}][/cb${formData.twoFetuses ? 'c' : ''}] 2 Fetuses
[cb${formData.threeFetuses ? 'c' : ''}][/cb${formData.threeFetuses ? 'c' : ''}] 3 Fetuses
[cb${formData.fourFetuses ? 'c' : ''}][/cb${formData.fourFetuses ? 'c' : ''}] 4 Fetuses and more

[/td][/tr]

[tr][td][b]4.3[/b] Fetal Measurements[/td][td]
${patientFetalMeasurements}
[/td][/tr]

[/table][/divbox]

[divbox=lightgrey][b]SECTION 5: GYNECOLOGICAL AND BIOLOGICAL EXAMINATIONS[/divbox]
[divbox=transparent][table]

[tr][td][b]5.1[/b] Well-Woman Exam
[i](Free Annual Preventive Exam - Pap Smear, Pelvic Exam, Mammography, etc...)[/i][/td][td]
[cb][/cb] [b]Last Well-Woman Exam:[/b] ${patientWellWomanExam}
[/td][/tr]

[tr][td][b]5.2[/b] Pap Smear[/td][td]
${patientPap}
[b]Results:[/b] ${patientPapResults}
[/td][/tr]

[tr][td][b]5.3[/b] STI Screening[/td][td]
${patientSTI}
[b]Results:[/b] ${patientSTIResults}
[/td][/tr]

[tr][td][b]5.4[/b] Blood Analysis

[i]-Determination of blood type
-Toxoplasmosis serology
-Rubella serology
-HIV 1 and 2 serology
-Research of irregular agglutinins
-First screening for Down syndrome
- Gestational Diabetes[/i][/td][td]
${patientBloodAnalysis}
[b]Results:[/b] ${patientBloodAnalysisResults}
[/td][/tr]

[tr][td][b]5.5[/b] Urine Analysis

[i]-Glycosuria
-Proteinuria[/i][/td][td]
${patientUrine}
[b]Results:[/b] ${patientUrineResults}
[/td][/tr]

[/table][/divbox]

[divbox=lightgrey][b]SECTION 6: SUMMARY OF CONSULTATION[/b][/divbox]
[divbox=transparent][list=none]

${patientSummaryConsultation}

[/list][/divbox][divbox=lightgrey][b]SECTION 7: PERSON IN CHARGE OF THE CONSULTATION[/b][/divbox]

[divbox=transparent][table][tr][td][b]7.1[/b] Full Name (Signature)[/td][td]${formatSignature(phmcSignature)}
[tr][td][b]7.2[/b] Full Name (Print)[/td][td]${phmcEmployee}
[tr][td][b]7.3[/b] Date[/td][td]${date}[/table][/divbox]`;

        return bbCode;
    };

    const generateObsFollowUp = () => {
        const {
            phmcEmployee,
            patientName,
            patientMedicalRecord,
            patientContractions,
            patientBleeding,
            patientDateofBirth,
            patientDiscomfort,
            patientFatter,
            patientBabyGender,
            patientKnowBabyGender,
            patientTemperature,
            patientBP,
            patientWeight,
            patientSummaryConsultation,
            patientBPM,
            patientResperation,
            patientOxi,
            patientDateofPregnancy,
            patientFetalMeasurements,
            patientBloodAnalysis,
            patientBloodAnalysisResults,
            patientUrine,
            patientUrineResults,
            date,
            patientUltraSummary,
            phmcSignature,
        } = formData;

        let bbCode = `[divbox=transparent] [center] [img]https://i.imgur.com/bUn7H8J.png[/img] [/center] [/divbox]
[divbox=lightgrey][size=150]

[center][b]DEPARTMENT OF OBSTETRICS AND GYNECOLOGY[/b]
[color=#800000][b]OBSTETRIC FOLLOW-UP[/b][/color][/center][/size]

[/divbox]

[divbox=lightgrey][b]SECTION 0: PERSONAL INFORMATION[/b][/divbox]
[divbox=transparent][table][tr][td][b]0.1[/b] Identifying
[/td][td]
[b]Medical record number:[/b] ${patientMedicalRecord}
[b]Full name:[/b] ${patientName}
[b]Date Of Birth:[/b] ${patientDateofBirth}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 1: PATIENT HEALTH STATUS[/b][/divbox]
[divbox=transparent][table]

[tr][td][b]1.1[/b] Pregnancy Length[/td][td]
${patientDateofPregnancy}

[tr][td][b]1.2[/b] Contractions[/td][td]
${patientContractions}
[/td][/tr]

[tr][td][b]1.3[/b] Discharge Or Bleeding[/td][td]
${patientBleeding}
[/td][/tr]

[tr][td][b]1.4[/b] Discomfort When Urinating[/td][td]
${patientDiscomfort}
[/td][/tr]

[tr][td][b]1.5[/b] Fetal Movements[/td][td]
${patientFetalMeasurements}
[/td][/tr]

[/table][/divbox]

[divbox=lightgrey][b]SECTION 2: PATIENT WEIGHT[/b][/divbox]
[divbox=transparent][table][tr][td][b]2.1[/b] Weight[/td][td]
${patientWeight}

[tr][td][b]2.2[/b] Weight Gained[/td][td]
${patientFatter}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 3: VITALS[/b][/divbox]
[divbox=transparent][table][tr][td][b]3.1[/b] Body Temperature[/td][td]
${patientTemperature}

[tr][td][b]3.2[/b] Heart Rate[/td][td]
${patientBPM}

[tr][td][b]3.3[/b] Respiration Rate[/td][td]
${patientResperation}

[tr][td][b]3.4[/b] Pulse Oximetry[/td][td]
${patientOxi}

[tr][td][b]3.5[/b] Blood Pressure[/td][td]
${patientBP}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 4: ABDOMINAL ULTRASONOGRAPHY[/b][/divbox]
[divbox=transparent][table]

[tr][td][b]4.1[/b] Gender[/td][td]
${patientBabyGender}
[/td][/tr]

[tr][td][b]4.2[/b] Parent Knows Baby's Gender[/td][td]
${patientKnowBabyGender}
[/td][/tr]

[tr][td][b]4.3[/b] Ultrasonography Summary[/td][td]
${patientUltraSummary}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 5: BIOLOGICAL EXAMINATIONS[/divbox]
[divbox=transparent][table]

[tr][td][b]5.1[/b] Blood Analysis

[i]-Toxoplasmosis Serology (if negative)[/i][/td][td]
${patientBloodAnalysis}
[b]Results:[/b] ${patientBloodAnalysisResults}
[/td][/tr]

[tr][td][b]5.2[/b] Urine Analysis

[i]-Glycosuria
-Proteinuria[/i][/td][td]
${patientUrine}
[b]Results:[/b] ${patientUrineResults}
[/td][/tr]

[/table][/divbox]

[divbox=lightgrey][b]SECTION 6: SUMMARY OF CONSULTATION[/b][/divbox]
[divbox=transparent][list=none]

${patientSummaryConsultation}

[/list][/divbox][divbox=lightgrey][b]SECTION 7: PERSON IN CHARGE OF THE CONSULTATION[/b][/divbox]

[divbox=transparent][table][tr][td][b]7.1[/b] Full Name (Signature)[/td][td]${formatSignature(phmcSignature)}
[tr][td][b]7.2[/b] Full Name (Print)[/td][td]${phmcEmployee}
[tr][td][b]7.3[/b] Date[/td][td]${date}[/table][/divbox]`;

        return bbCode;
    };
        const generateGyneMainFile = () => {
        const {
            phmcEmployee,
            patientName,
            patientMedicalRecord,
            patientJob,
            patientPartnerPH,
            patientDateofBirth,
            patientPartnerName,
            patientJobTasks,
            patientLivingHabits,
            patientBaggageofParents,
            patientTemperature,
            patientBP,
            patientWeight,
            patientSummaryConsultation,
            patientBPM,
            patientResperation,
            patientOxi,
            patientNotes,
            patientWellWomanExam,
            patientPapResults,
            patientSTI,
            patientSTIResults,
            patientHeight,
            patientBloodAnalysis,
            patientBloodAnalysisResults,
            patientUrine,
            patientUrineResults,
            date,
            patientPap,
            patientPartnerDiscord,
            phmcSignature,
            patientAdditionalPregnancy,
            patientPregProblems,
        } = formData;

        let bbCode = `[divbox=transparent] [center] [img]https://i.imgur.com/bUn7H8J.png[/img] [/center] [/divbox]
[divbox=lightgrey][size=150]

[center][b]DEPARTMENT OF OBSTETRICS AND GYNECOLOGY[/b][/center][/size]

[/divbox]

[divbox=lightgrey][b]SECTION 0: PERSONAL INFORMATION[/b][/divbox]
[divbox=transparent][table][tr][td][b]0.1[/b] Identifying
[/td][td]
[b]Medical Record Number:[/b] ${patientMedicalRecord}
[b]Full Name:[/b] ${patientName}
[b]Date of Birth:[/b] ${patientDateofBirth}
[tr][td][b]0.2[/b] Partner
[/td][td][b]Full Name:[/b] ${patientPartnerName}
[b]Telephone Number:[/b] ${patientPartnerPH}
[b]Email:[/b] ${patientPartnerDiscord}
[/td][/tr][tr][td][b]0.3[/b] Job
[/td][td][b]Employer:[/b] ${patientJob}
[b]Tasks:[/b] ${patientJobTasks}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 1: HEALTH STORY[/b][/divbox]
[divbox=transparent][table]

[tr][td][b]1.1[/b] Previous Gynecological Problems[/td][td]
${patientPregProblems}[/td][/tr]

[tr][td][b]1.2[/b] Previous Pregnancies
[i](If yes, specify if she has had miscarriages and/or abortions.)[/i][/td][td]
${patientAdditionalPregnancy} [/td][/tr]

[tr][td][b]1.3[/b] Hereditary Baggage Of Parents[/td][td]
${patientBaggageofParents}


[tr][td][b]1.5[/b] Patient's Living Habits
[i](Diet, physical activity, smoking, alcohol and drugs.)[/i][/td][td]
${patientLivingHabits}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 2: PATIENT MEASUREMENTS[/b][/divbox]
[divbox=transparent][table][tr][td][b]2.1[/b] Height[/td][td]
${patientHeight}

[tr][td][b]2.2[/b] Weight[/td][td]
${patientWeight}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 3: VITALS[/b][/divbox]
[divbox=transparent][table][tr][td][b]3.1[/b] Body Temperature[/td][td]
${patientTemperature}

[tr][td][b]3.2[/b] Heart Rate[/td][td]
${patientBPM}

[tr][td][b]3.3[/b] Respiration Rate[/td][td]
${patientResperation}

[tr][td][b]3.4[/b] Pulse Oximetry[/td][td]
${patientOxi}

[tr][td][b]3.5[/b] Blood Pressure[/td][td]
${patientBP}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 5: GYNECOLOGICAL AND BIOLOGICAL EXAMINATIONS[/b][/divbox]
[divbox=transparent][table][tr][td][b]4.1[/b] Findings [/td][td]
${patientNotes}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 5: GYNECOLOGICAL AND BIOLOGICAL EXAMINATIONS[/divbox]
[divbox=transparent][table]

[tr][td][b]5.1[/b] Well-Woman Exam
[i](Free Annual Preventive Exam - Pap Smear, Pelvic Exam, Mammography, etc...)[/i][/td][td]
[cb][/cb] [b]Last Well-Woman Exam:[/b] ${patientWellWomanExam}
[/td][/tr]

[tr][td][b]5.2[/b] Pap Smear[/td][td]
${patientPap}
[b]Results:[/b] ${patientPapResults}
[/td][/tr]

[tr][td][b]5.3[/b] STI Screening[/td][td]
${patientSTI}
[b]Results:[/b] ${patientSTIResults}
[/td][/tr]

[tr][td][b]5.4[/b] Blood Analysis

[i]-Determination of blood type
-Toxoplasmosis serology
-Rubella serology
-HIV 1 and 2 serology
-Research of irregular agglutinins
-First screening for Down syndrome
- Gestational Diabetes[/i][/td][td]
${patientBloodAnalysis}
[b]Results:[/b] ${patientBloodAnalysisResults}
[/td][/tr]

[tr][td][b]5.5[/b] Urine Analysis

[i]-Glycosuria
-Proteinuria[/i][/td][td]
${patientUrine}
[b]Results:[/b] ${patientUrineResults}
[/td][/tr]

[/table][/divbox]

[divbox=lightgrey][b]SECTION 6: SUMMARY OF CONSULTATION[/b][/divbox]
[divbox=transparent][list=none]

${patientSummaryConsultation}

[/list][/divbox][divbox=lightgrey][b]SECTION 7: PERSON IN CHARGE OF THE CONSULTATION[/b][/divbox]

[divbox=transparent][table][tr][td][b]7.1[/b] Full Name (Signature)[/td][td]${formatSignature(phmcSignature)}
[tr][td][b]7.2[/b] Full Name (Print)[/td][td]${phmcEmployee}
[tr][td][b]7.3[/b] Date[/td][td]${date}[/table][/divbox]`;

        return bbCode;
    };
    const generateGyneFollowUp = () => {
        const {
            phmcEmployee,
            patientName,
            patientMedicalRecord,
            patientBleeding,
            patientDateofBirth,
            patientDiscomfort,
            patientFatter,
            patientTemperature,
            patientBP,
            patientWeight,
            patientSummaryConsultation,
            patientBPM,
            patientResperation,
            patientOxi,
            patientBloodAnalysis,
            patientBloodAnalysisResults,
            patientUrine,
            patientUrineResults,
            date,
            patientUltraSummary,
            phmcSignature,
        } = formData;

        let bbCode = `[divbox=transparent] [center] [img]https://i.imgur.com/bUn7H8J.png[/img] [/center] [/divbox]
[divbox=lightgrey][size=150]

[center][b]DEPARTMENT OF OBSTETRICS AND GYNECOLOGY[/b]
[color=#800000][b]OBSTETRIC FOLLOW-UP[/b][/color][/center][/size]

[/divbox]

[divbox=lightgrey][b]SECTION 0: PERSONAL INFORMATION[/b][/divbox]
[divbox=transparent][table][tr][td][b]0.1[/b] Identifying
[/td][td]
[b]Medical record number:[/b] ${patientMedicalRecord}
[b]Full name:[/b] ${patientName}
[b]Date Of Birth:[/b] ${patientDateofBirth}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 1: PATIENT HEALTH STATUS[/b][/divbox]
[divbox=transparent][table]


[tr][td][b]1.1[/b] Discharge Or Bleeding[/td][td]
${patientBleeding}
[/td][/tr]

[tr][td][b]1.2[/b] Discomfort When Urinating[/td][td]
${patientDiscomfort}
[/td][/tr]

[/td][/tr]

[/table][/divbox]

[divbox=lightgrey][b]SECTION 2: PATIENT WEIGHT[/b][/divbox]
[divbox=transparent][table][tr][td][b]2.1[/b] Weight[/td][td]
${patientWeight}

[tr][td][b]2.2[/b] Weight Gained[/td][td]
${patientFatter}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 3: VITALS[/b][/divbox]
[divbox=transparent][table][tr][td][b]3.1[/b] Body Temperature[/td][td]
${patientTemperature}

[tr][td][b]3.2[/b] Heart Rate[/td][td]
${patientBPM}

[tr][td][b]3.3[/b] Respiration Rate[/td][td]
${patientResperation}

[tr][td][b]3.4[/b] Pulse Oximetry[/td][td]
${patientOxi}

[tr][td][b]3.5[/b] Blood Pressure[/td][td]
${patientBP}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 4: ABDOMINAL ULTRASONOGRAPHY[/b][/divbox]
[divbox=transparent][table]

[tr][td][b]4.3[/b] Ultrasonography Summary[/td][td]
${patientUltraSummary}

[/table][/divbox]

[divbox=lightgrey][b]SECTION 5: BIOLOGICAL EXAMINATIONS[/divbox]
[divbox=transparent][table]

[tr][td][b]5.1[/b] Blood Analysis

[i]-Toxoplasmosis Serology (if negative)[/i][/td][td]
${patientBloodAnalysis}
[b]Results:[/b] ${patientBloodAnalysisResults}
[/td][/tr]

[tr][td][b]5.2[/b] Urine Analysis

[i]-Glycosuria
-Proteinuria[/i][/td][td]
${patientUrine}
[b]Results:[/b] ${patientUrineResults}
[/td][/tr]

[/table][/divbox]

[divbox=lightgrey][b]SECTION 6: SUMMARY OF CONSULTATION[/b][/divbox]
[divbox=transparent][list=none]

${patientSummaryConsultation}

[/list][/divbox][divbox=lightgrey][b]SECTION 7: PERSON IN CHARGE OF THE CONSULTATION[/b][/divbox]

[divbox=transparent][table][tr][td][b]7.1[/b] Full Name (Signature)[/td][td]${formatSignature(phmcSignature)}
[tr][td][b]7.2[/b] Full Name (Print)[/td][td]${phmcEmployee}
[tr][td][b]7.3[/b] Date[/td][td]${date}[/table][/divbox]`;

        return bbCode;
    };
    const generateMentalHealthMainFile = () => {
        const {
            patientName,
            patientGender,
            patientPH,
            patientRace,
            patientEmergencyContact,
            patientEmergencyContactNumber,
            patientEmergencyContactRelation,
            patientDiscord,
            phmcEmployee,
            patientFileCreation,
            patientDateofBirth,
            patientVisitReason,
            patientCurrentMedicine,
            patientMedicalFile,
            patientAllergies,
            patientMedicine,
            patientMedicalHistory,
            patientSurgicalHistory,
            patientPsychDiagnoses,
            patientEvalFile,
            patientSubstance,
            patientJob,
            patientNotes,
            patientDiagnosis,
            patientTrauma,
            patientTreatment,
            patientEdu,
            patientDev,
            patientLegal,
            patientSpiritual,
        } = formData;

        let bbCode = `[divbox=transparent] [center] [img]https://i.imgur.com/bUn7H8J.png[/img] [/center] [/divbox]
[divbox=lightgrey]


[center][size=150][b]PSYCHIATRIC PATIENT FILE[/b][/size]

[size=100][b]DEPARTMENT OF MENTAL HEALTH SERVICES
PILLBOX HILL MEDICAL CENTER[/b][/size]
[size=75][i]Elgin Avenue, Pillbox Hill, Los Santos, SA[/i][/size]
[/center]



[/divbox]

[divbox=transparent][table][tr][td]File
Information[/td][td]
[b]Creation Date:[/b] ${patientFileCreation}
[b]Primary Therapist:[/b] ${phmcEmployee}
[tr][td]File Status[/td][td]
[${formData.caseOpen ? `X` : ` `}] Open
[${formData.caseClosed ? `X` : ` `}] Closed
[/td][/tr][/table][/divbox]

[divbox=transparent][table][tr][td]Reason for Initial Visit[/td][td]
${patientVisitReason}
[/td][/tr][/table][/divbox]

[divbox=lightgrey][b]SECTION 00: PATIENT INFORMATION[/b][/divbox]
[divbox=transparent][table][tr][td]Patient Identifying
Information[/td][td]
[b]Name:[/b] ${patientName}
[b]DOB:[/b] ${patientDateofBirth}
[b]Sex:[/b] ${patientGender}
[b]Race:[/b] ${patientRace}
[/td][/tr][tr][td]Patient Contact
Information[/td]
[td][b]Telephone Number:[/b] ${patientPH}
[b]Email:[/b] ${patientDiscord}
[/td][/tr]
[tr][td]Emergency Contact
Information[/td]
[td][b]Name:[/b] ${patientEmergencyContact}
[b]Telephone Number:[/b] ${patientEmergencyContactNumber}
[b]Relation to Patient:[/b] ${patientEmergencyContactRelation}
[/td][/tr][/table][/divbox]

[divbox=lightgrey][b]SECTION 01: MEDICAL HISTORY[/b][/divbox]
[divbox=transparent][list=none]
[b]Medical History:[/b] ${patientMedicalHistory}
[b]Surgical History:[/b] ${patientSurgicalHistory}

[b]Current Medications:[/b] ${patientMedicine}
[b]Medication History:[/b] ${patientCurrentMedicine}
[b]Known Allergies:[/b] ${patientAllergies}

[b]Additional Files[/b] (if applicable): [url=${patientMedicalFile}]PHMC File[/url], [url=${patientEvalFile}]Evaluation X[/url]
[/list][/divbox]

[divbox=lightgrey][b]SECTION 02: PSYCHIATRIC HISTORY[/b][/divbox]
[divbox=transparent][list=none]
[b]Previous psychiatric diagnoses:[/b] ${patientPsychDiagnoses}

[b]Safety Concerns:[/b]
[list=none]
[${formData.violenceToSelf ? 'X' : ' '}] History of Violence to Self
[${formData.violenceToOthers ? 'X' : ' '}] History of Violence to Others
[b]Risk Status:[/b]
[list=none]
[${formData.noRisk ? 'X' : ' '}] No Risk
[${formData.LowRisk ? `X` : ` `}] Low Risk
[${formData.MediumRisk ? `X` : ` `}] Medium Risk
[${formData.HighRisk ? `X` : ` `}] High Risk
[/list]

[b]Mental Health Treatment History:[/b] ${patientTreatment}
[b]Trauma History:[/b] ${patientTrauma}
[b]Substance Use History:[/b] ${patientSubstance}
[/list][/divbox]

[divbox=lightgrey][b]SECTION 03: PSYCHOSOCIAL HISTORY[/b][/divbox]
[divbox=transparent][list=none]
[b]Occupational History:[/b] ${patientJob}
[b]Education History:[/b] ${patientEdu}
[b]Developmental History:[/b] ${patientDev}
[b]Legal History:[/b] ${patientLegal}
[b]Spiritual/Cultural Considerations:[/b] ${patientSpiritual}
[/list][/divbox]

[divbox=lightgrey][b]SECTION 04: DIAGNOSES[/b][/divbox]
[divbox=transparent][list=none]
[b]Diagnoses:[/b] ${patientDiagnosis}

[b]Notes:[/b] ${patientNotes}
[/list][/divbox]`;

        return bbCode;
    };
    const generateMentalHealthVisit = () => {
        const {
            phmcEmployee,
            date,
            patientNewMedicine,
            patientNotes,
            patientTreatment,
        } = formData;

        let bbCode = `[divbox=lightgrey][b]SESSION INFORMATION[/b][/divbox]
[divbox=transparent][table][tr][td]Session
Information[/td][td]
[b]Completion Date:[/b] ${date}
[b]Completing Therapist:[/b] ${phmcEmployee}
[/td][/tr][/table][/divbox]

[divbox=lightgrey][b]SESSION OBSERVATIONS & NOTES[/b][/divbox]
[divbox=transparent][list=none]
[b]Treatments/Therapies Performed:[/b] ${patientTreatment}
[b]Findings, Observations, Notes:[/b] ${patientNotes}

[b]Changes to Treatment Plan:[/b] ${patientNewMedicine}
[/list][/divbox]`;

        return bbCode;
    };

    const generateMentalHealthRiskUpdate = () => {
        const {
            patientNotes,
        } = formData;

        let bbCode = `[divbox=lightgrey][b]RISK STATUS CHANGE[/b][/divbox]
[divbox=transparent] [list=none] [B]Observations and Changes Pending:[/B] ${patientNotes}

[b]Risk Status:[/b][list]
[${formData.noRisk ? 'X' : ' '}] No Risk
[${formData.LowRisk ? `X` : ` `}] Low Risk
[${formData.MediumRisk ? `X` : ` `}] Medium Risk
[${formData.HighRisk ? `X` : ` `}] High Risk

[/list]

[/list][/divbox]`;

        return bbCode;
    };
    
    const generateMentalHealthVisitUp = () => {
        const {
            phmcEmployee,
            date,
            patientNotes,
        } = formData;

        let bbCode = `[divbox=lightgrey][b]PATIENT FILE UPDATE[/b][/divbox]
[divbox=transparent][table][tr][td]Update
Information[/td][td]
[b]Update Date:[/b] ${date}
[b]Updating Therapist:[/b]  ${phmcEmployee}
[/td][/tr][/table][/divbox]

[divbox=lightgrey][b]OBSERVATIONS & NOTES[/b][/divbox]
[divbox=transparent][list=none]

[b]Findings, Observations, Notes:[/b] ${patientNotes}

[/list][/divbox]`;

        return bbCode;
    };
    const generateMentalHealthNoSession = () => {
        const {
            phmcEmployee,
            date,
            patientNotes,
        } = formData;

        let bbCode = `[divbox=lightgrey][b]PATIENT FILE UPDATE[/b][/divbox]
[divbox=transparent][table][tr][td]Update
Information[/td][td]
[b]Update Date:[/b] ${date}
[b]Updating Therapist:[/b]  ${phmcEmployee}
[/td][/tr][/table][/divbox]

[divbox=lightgrey][b]OBSERVATIONS & NOTES[/b][/divbox]
[divbox=transparent][list=none]

[b]Findings, Observations, Notes:[/b] ${patientNotes}

[/list][/divbox]`;

        return bbCode;
    };
    const generateAgencyFeedback = () => {
        const {
            coronerRank,
            coronerEmployee,
            placeOfDeath,
            department,
            dateTime,
            decedentName,
            synopsis,
            scenePhotos,
        } = formData;

        const scenePhotosBBCode = scenePhotos.split(',').map(photo => `[img]${photo.trim()}[/img]`).join('\n');

        let bbCode =`[divbox=transparent][center][img]https://i.imgur.com/Hxjt4M2.png[/img] [/center]
[hr][/hr][color=#5597D0][right]
[U][SIZE=80][/SIZE][/U][/RIGHT][/COLOR]
[CENTER][B]DEPARTMENT OF PATHOLOGY AND FORENSIC MEDICINE 
AGENCY INCIDENT REPORT[/B][/CENTER]
[HR][/HR]
[b]EMPLOYEE DETAILS[/b]
[divbox=transparent][b]Name:[/b] ${coronerEmployee}
[HR][/HR]
[b]RANK:[/b] ${coronerRank}
[/DIVBOX]
[b]DESCRIPTION OF INCIDENT[/b]
[divbox=transparent][b]DATE OF INCIDENT:[/b] ${dateTime}
[HR][/HR]
[b]LOCATION OF INCIDENT:[/b] ${placeOfDeath}
[HR][/HR]
[b]INCIDENT DETAILS[/b]
[i][color=#0080FF](How the incident happened, factors leading to the event, and what took place. Be as specific as possible.)[/color][/i][DIVBOX=transparent] ${synopsis}[/DIVBOX]
[HR][/HR]
[b]DEPARTMENT INVOLVED[/B]
${department}
[b]NAME / ROLE / CONTACT OF PARTIES INVOLVED[/b]
${decedentName}
[HR][/HR]
[/DIVBOX]
[b]PHOTO OF INCIDENT (IF POSSIBLE)[/b]
[divbox=transparent] ${scenePhotosBBCode}`

        return bbCode;
    };
    // Update BBCode generation logic
    const bbCode = bbCodeVersion === 1 ? generateDeath() :
    bbCodeVersion === 2 ? generateEmail() :
    bbCodeVersion === 3 ? generateMedConsultIntMedMain() :
    bbCodeVersion === 4 ? generateDental() :
    bbCodeVersion === 5 ? generateSurgicalOps() :
    bbCodeVersion === 6 ? generatePhysEvalInternalMed() :
    bbCodeVersion === 7 ? generateMedConsultIntMedReply() :
    bbCodeVersion === 8 ? generateMedConsultEmergencyMedForm() :
    bbCodeVersion === 9 ? generateObsMainFile() :
    bbCodeVersion === 10 ? generateObsFollowUp() :
    bbCodeVersion === 11 ? generateMedConsultEmergencyMedForm2() :
    bbCodeVersion === 12 ? generateGyneMainFile() :
    bbCodeVersion === 13 ? generateGyneFollowUp() :
    bbCodeVersion === 14 ? generateMentalHealthMainFile() :
    bbCodeVersion === 15 ? generateMentalHealthVisitUp() :
    bbCodeVersion === 16 ? generateMentalHealthRiskUpdate() :
    bbCodeVersion === 17 ? generateMentalHealthNoSession() :
    bbCodeVersion === 18 ? generateAgencyFeedback() :
    generateDeath();

const generateTitle = () => {
    if (bbCodeVersion === 1) {
        const { typeOfDeath, decedentName, decedentOOC, dateTime } = formData;
        const date = new Date(dateTime).toLocaleDateString('en-US');
        return `[${typeOfDeath}] ${decedentName} ((${decedentOOC})) - ${date}`;
    } else if (bbCodeVersion === 2) {
        const { decedentName, decedentOOC } = formData;
        return `Coroner Report - ${decedentName} | ((${decedentOOC}))`;
    } else if (bbCodeVersion === 18) {
        const { department } = formData;
        return `Agency Incident Report - ${department}`;
    } else if (bbCodeVersion === 14 || bbCodeVersion === 15 || bbCodeVersion === 16 || bbCodeVersion === 17) {
        const { patientMedicalRecord, patientName } = formData;
        return `[${patientMedicalRecord}] - ${patientName}`;
    } else {
        const { patientMedicalRecord, patientName } = formData;
        return `${patientMedicalRecord} - ${patientName}`;
    }
};
    const clearForm = () => {
        setFormData({
            coronerRank: 'Forensic Attendant',
            placeOfDeath: '',
            department: '',
            dateTime: '',
            serialNumber: '',
            decedentName: '',
            pronouncedTimeOfDeath: '',
            synopsis: '',
            probableCauseOfDeath: '',
            mannerOfDeath: '',
            typeOfDeath: 'PK',
            decedentOOC: '',
            scenePhotos: '',
            additionalImages: '',
            requestingOfficer: '',
            coronerDiscord: '',
            coronerPHNumber: '50056',
            deathReport: '',
            additionalReports: [],
            internalReport: '',
            internalAdditionalReports: '',
            policeNotification: '',
            treatmentLocation: '',
            moreDeathReports: [''],
            phmcEmployee: '',
            extraStaff: '',
            patientName: '',
            patientMedicine: '',
            patientConsent: '',
            patientAllergies: '',
            surgeryComplications: '',
            surgeryProcedures: '',
            drugType: '',
            postDrugtype: '',
            surgicalSummery: '',
            surgeryTime: '',
            medicalComplications: '',
            treatmentProcedures: '',
            medType: '',
            postTreatment: '',
            medicalSummary: '',
            evalTime: '',
            patientWeight: '',
            patientBMI: '',
            patientBPM: '',
            patientpulse: '',
            patientOxi: '',
            patientBP: '',
            patientCareer: '',
            patientImpairments: '',
            patientPastDiseases: '',
            patientAssessment: '',
            appointmentDate: '',
            patientPH: '',
            patientGender: '',
            patientChewing: '',
            patientPriority: '',
            patientNewMedicine: '',
            patientTreatment: '',
            patientDiagnosis: '',
            patientPrescription: '', // Missing in original
            patientSummary: '',
            teethCondition: '', // New field for dental condition
            oralHygiene: '',   // New field for hygiene status
            lastDentalVisit: '', // New field for last visit
            // New fields for Medical Consultation Internal Medicine 2
            patientConsultation: '',
            patientPerscription: '',
            patientSummaryConsultation: '',
            patientCondition: '',
            patientNotes: '',
            patientMedicalRecord: '',
            patientJob: '',
            patientPartnerPH: '',
            patientDateofBirth: '',
            patientPartnerName: '',
            patientJobTasks: '',
            patientLivingHabits: '',
            patientPreHealth: '',
            patientPreviousPreg: '',
            patientBaggageofParents: '',
            patientTemperature: '',
            patientGynoProb: '',
            patientResperation: '',
            patientDateofPregnancy: '',
            patientFetalMeasurements: '',
            patientLastWellWomanExam: '',
            patientWellWomanExam: '',
            patientDiscord: '',
            patientPapResults: '',
            patientSTI: '',
            patientSTIResults: '',
            patientHeight: '',
            patientBloodAnalysis: '',
            patientBloodAnalysisResults: '',
            patientUrine: '',
            patientUrineResults: '',
            date: '',
            patientPap: '',
            patientPartnerDiscord: '',
            phmcSignature: '',
            patientAdditionalPregnancy: '',
            patientPregProblems: '',
            patientContractions: '', // Added
            patientBleeding: '', // Added
            patientDiscomfort: '', // Added
            patientFatter: '', // Added
            patientBabyGender: '', // Added
            patientKnowBabyGender: '', // Added
            patientUltraSummary: '', // Added
            patientCurrentMedicine: '',
            // mental health stuff
            caseOpen: false,
            caseClosed: false,
            violenceToSelf: false,
            violenceToOthers: false,
            LowRisk: false,
            noRisk: true,
            HighRisk: false,
            MediumRisk: false,
            patientFileCreation: '',
            patientVisitReason: '',
            patientSurgicalHistory: '',
            patientMedHistory: '',
            patientPsychDiagnoses: '',
            patientEvalFile: '',
            patientMedicalFile: '',
            patientSubstance: '',
            patientTrauma: ``,
            patientEdu: ``,
            patientDev: ``,
            patientLegal: ``,
            patientSpiritual: ``, 
        
        });
        const fieldsToRemove = [
            'dateTime',
            'department', 
            'pronouncedTimeOfDeath',
            'placeOfDeath'
        ];
    
        fieldsToRemove.forEach(field => {
            localStorage.removeItem(field);
            localStorage.removeItem(`${field}_timestamp`);
        });
    
        setParsedBBCode('');
        showNotification('Form cleared!', 'check-circle');
        };

    const showNotification = (message, icon = 'check-circle') => {
        setNotification({
            message,
            icon
        });

        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };


    // Add new state
    const [parsedBBCode, setParsedBBCode] = useState('');
    const getBBCodeContent = () => {
        switch (bbCodeVersion) {
          case 1:
            return generateDeath();
          case 2:
            return generateEmail();
          case 3:
            return generateMedConsultIntMedMain();
          case 4:
            return generateDental();
          case 5:
            return generateSurgicalOps();
          case 6:
            return generatePhysEvalInternalMed();
          case 7:
            return generateMedConsultIntMedReply();
          case 8:
            return generateMedConsultEmergencyMedForm();
          case 9:
            return generateObsMainFile();
          case 10:
            return generateObsFollowUp();
          case 11:
            return generateMedConsultEmergencyMedForm2();
          case 12:
            return generateGyneMainFile();
          case 13:
            return generateGyneFollowUp();
          case 14:
            return generateMentalHealthMainFile();
          case 15:
            return generateMentalHealthVisit();
          case 16:
            return generateMentalHealthRiskUpdate();
          case 17:
            return generateMentalHealthNoSession();
          case 18:
            return generateAgencyFeedback();
          default:
            return '';
        }
      };
    // Add parse function
    const parseBBCode = () => {
        const bbCode = generateDeath();
        setParsedBBCode(bbCode);
        setFormData(prev => ({
            ...prev,
            deathReport: bbCode
        }));
        showNotification('BBCode parsed and copied to Death Report field!', 'check-circle');
    };

    // Add clear function
    const clearParsedBBCode = () => {
        setParsedBBCode('');
        setFormData(prev => ({
            ...prev,
            deathReport: ''
        }));
        showNotification('Parsed BBCode cleared!', 'trash-alt');
    };


    const clearOldLocalStorage = () => {
        const fields = [
            'phmcEmployee', 'phmcSignature',
            'coronerEmployee', 'coronerBadge', 'coronerRank', 'coronerDiscord',
            'pronouncedTimeOfDeath', 'department', 'dateTime', 'placeOfDeath', 'mannerOfDeath'
        ];
        
        const fiveDays = 5 * 24 * 60 * 60 * 1000; 
        const threeHours = 3 * 60 * 60 * 1000;
    
        fields.forEach(field => {
            const timestamp = localStorage.getItem(`${field}_timestamp`);
            if (timestamp) {
                const timeLimit = ['pronouncedTimeOfDeath', 'department', 'dateTime', 'placeOfDeath', 'mannerOfDeath'].includes(field) 
                    ? threeHours 
                    : fiveDays;
                    
                if (Date.now() - timestamp > timeLimit) {
                    localStorage.removeItem(field);
                    localStorage.removeItem(`${field}_timestamp`);
                }
            }
        });
    };
    
    useEffect(() => {
        clearOldLocalStorage();
        
        const fields = [
            'phmcEmployee', 'phmcSignature',
            'coronerEmployee', 'coronerBadge', 'coronerRank', 'coronerDiscord',
            'pronouncedTimeOfDeath', 'department', 'dateTime', 'placeOfDeath', 'mannerOfDeath'
        ];
        const newFormData = { ...formData };
    
        fields.forEach(field => {
            const value = localStorage.getItem(field);
            if (value) {
                newFormData[field] = value;
            }
        });
    
        setFormData(newFormData);
    }, []);        
    
    const handleSelectChange = (selectedOption, type) => {
        
        const timestamp = Date.now();
    
        if (selectedOption) {
    
            if (type === 'coroner') {
                // Update formData and localStorage for coroner
                setFormData(prev => ({
                    ...prev,
                    coronerEmployee: selectedOption.value,
                    coronerBadge: selectedOption.badge,
                    coronerRank: selectedOption.rank,
                    coronerDiscord: selectedOption.discord
                }));
    
                // Save to localStorage with timestamp
                localStorage.setItem('coronerEmployee', selectedOption.value);
                localStorage.setItem('coronerBadge', selectedOption.badge);
                localStorage.setItem('coronerRank', selectedOption.rank);
                localStorage.setItem('coronerDiscord', selectedOption.discord);
                localStorage.setItem('coronerEmployee_timestamp', timestamp.toString());
                }
        } else {
            // Clear coroner data
            const fields = ['coronerEmployee', 'coronerBadge', 'coronerRank', 'coronerDiscord'];
            fields.forEach(field => {
                localStorage.removeItem(field);
                localStorage.removeItem(`${field}_timestamp`);
            });
            
            setFormData(prev => ({
                ...prev,
                coronerEmployee: '',
                coronerBadge: '',
                coronerRank: '',
                coronerDiscord: ''
            }));
        }
    };                
    const handleChange = (e) => {
        const { name, value } = e.target;
        const timestamp = Date.now();
    
        // Save selected employee data
        if (name === 'phmcEmployee' || name === 'coronerEmployee') {
            const fields = name === 'phmcEmployee' ? 
                ['phmcEmployee', 'phmcSignature'] :
                ['coronerEmployee', 'coronerBadge', 'coronerRank', 'coronerDiscord'];
    
            fields.forEach(field => {
                localStorage.setItem(field, formData[field]);
                localStorage.setItem(`${field}_timestamp`, timestamp);
            });
        }
    
        // Handle 3-hour expiry fields
        if (['pronouncedTimeOfDeath', 'department', 'dateTime', 'placeOfDeath', 'mannerOfDeath'].includes(name)) {
            localStorage.setItem(name, value);
            localStorage.setItem(`${name}_timestamp`, timestamp);
        }
    
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const addReport = () => {
        setFormData(prev => ({
            ...prev,
            additionalReports: [...prev.additionalReports, '']
        }));
    };

    const removeReport = (indexToRemove) => {
        setFormData(prev => ({
            ...prev,
            additionalReports: prev.additionalReports.filter((_, index) => index !== indexToRemove)
        }));
    };

    const handleReportChange = (index, value) => {
        setFormData(prev => {
            const newReports = [...prev.additionalReports];
            newReports[index] = value;
            return {
                ...prev,
                additionalReports: newReports 
            };
        });
    };

    // Add new state
    const [showAgencySelector, setShowAgencySelector] = useState(true);
    const [hideAgencySelector, setHideAgencySelector] = useState(localStorage.getItem('hideAgencySelector') === 'true');
// Add this helper function to check and format signature

    useEffect(() => {
        setShowAgencySelector(!hideAgencySelector);
    }, [hideAgencySelector]);
    
      
    const handleHideSelector = (e) => {
        const isChecked = e.target.checked;
        setHideAgencySelector(isChecked);
        localStorage.setItem('hideAgencySelector', isChecked);
    };
    const [setShowModal] = useState(false);

    const versionNames = {
        1: "Death Report",
        2: "Email Generator",
        3: "Internal Medicine",
        4: "Dental Report",
        5: "Surgery Report",
        6: "Physical Evaluation (IM)",
        7: "Med Consultation - Add Reply (IM)",
        8: "Med Consultation - New File (EM)",
        9: "Obs Main File",
        10: "Obs Follow Up",
        11: "Med Consultation - Add Reply (EM)",
        12: "Gynecology - Main File",
        13: "Gynecology - Add Reply",
        14: "Mental Health - Main File",
        15: "Mental Health - Visitation",
        16: "Mental Health - Risk Update",
        17: "Mental Health - No Session",
        18: "Agency Feedback"
    };
    
    const handleAgencySelect = (version) => {
        setBbCodeVersion(version);
        setShowPHMCModal(false);
        setShowAgencySelector(false);
        showNotification(`Switched to ${versionNames[version]}`, 'exchange-alt');
    };
    
    const toggleAgencySelector = () => {
        setShowAgencySelector(prev => !prev);
    };

    // Add state near other useState declarations
    const [showBBCode, setShowBBCode] = useState(false);
    const [showImages, setShowImages] = useState(false);
    // Add modal to the start of return statement
    return (
        <div className="App">
            {showAgencySelector && (
                <div className="modal-overlay">
                    <div className="agency-selector-modal">
                        <div className="modal-header">
                            <h4>Select Your Department</h4>
                            <button
                                className="close-button"
                                onClick={() => setShowAgencySelector(false)}
                                aria-label="Close selector"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <div className="agency-selector-buttons">
                            <div className="agency-row">
                                <button
                                    className="agency-select-button"
                                    onClick={() => handleAgencySelect(1)} // Death Report 
                                >
                                    <img src={application}
                                        className="Center"
                                        alt="Feedback"
                                    />
                                    <span>Forensic Services </span>
                                </button>
                                <button
                                    className="agency-select-button"
                                    onClick={() => handleAgencySelect(4)} // Dentist Forms
                                >
                                    <img src={dentist}
                                        className="Center"
                                        alt="Feedback"
                                    />
                                    <span>Dentist</span>
                                </button>
                                <button
                                    className="agency-select-button"
                                    onClick={() => handleAgencySelect(3)} // Medical Consultation Internal Medicine
                                >
                                    <img src={nurse}
                                        className="Center"
                                        alt="Feedback"
                                    />
                                    <span>Medical Consult [IM] </span>
                                </button>
                                <button
                                    className="agency-select-button"
                                    onClick={() => handleAgencySelect(8)} // Emergency Medical Consultation
                                >
                                    <img src={emergency}
                                        className="Center"
                                        alt="Feedback"
                                    />
                                    <span>Medical Consultation [EM]</span>
                                </button>
                            </div>
                            <div className="agency-row">
                                <button
                                    className="agency-select-button"
                                    onClick={() => handleAgencySelect(6)} // Physical Evaluation (Internal Medicine)
                                >
                                    <img src={nurse}
                                        className="Center"
                                        alt="Feedback"
                                    />
                                    <span>Physical Evaluation (IM)</span>
                                </button>
                                <button
                                    className="agency-select-button"
                                    onClick={() => handleAgencySelect(5)}
                                >
                                    <img src={surgeon}
                                        className="Center"
                                        alt="Feedback"
                                    />
                                    <span>Surgical Operations (WIP) </span>
                                </button>
                                <button
                                    className="agency-select-button"
                                    onClick={() => handleAgencySelect(9)}
                                >
                                    <img src={gynecology}
                                        className="Center"
                                        alt="Feedback"
                                    />
                                    <span>Obstetrics & Gynecology Forms </span>
                                </button>
                                <button
                                    className="agency-select-button"
                                    onClick={() => handleAgencySelect(14)}
                                >
                                    <img src={psychology}
                                        className="Center"
                                        alt="Feedback"
                                    />
                                    <span>Psychology Forms </span>
                                </button>

                            </div>
                        </div>
                        <div className="hide-selector-option">
                            <input
                                type="checkbox"
                                id="hideSelector"
                                checked={hideAgencySelector}
                                onChange={handleHideSelector}
                            />
                            <label htmlFor="hideSelector">Don't show this popup again</label>
                        </div>
                    </div>
                </div>
            )}
            <div className="header-info-wrapper">
                <div className="header-info">
                    {commitInfo.date && (
                        <>
                            <span className="version-info">
                                <a href="https://github.com/GTAW-PHMC/forms/tree/gh-pages" target="_blank" rel="noopener noreferrer">
                                    This website was last updated on {commitInfo.date} with version #{commitInfo.sha}</a>
                            </span>
                            <span className="contact-info">
                                Need help? Contact Alyson Frost on <a
                                    href="http://discord.gg/rrzJ4EeHfK"
                                    className="discord-link"
                                >
                                    Discord  <i className="fab fa-discord"></i>
                                </a>❄️❄️
                            </span>
                        </>
                    )}
                </div>
            </div>
            <div className="container">
                <div className="form-container">
                    <button
                        type="button"
                        className="changelog-button"
                        onClick={() => setShowChangelog(true)}
                    >
                        <i className="fas fa-history"></i>
                        View Changelog
                    </button>

                    {showChangelog && (
                        <div className="modal-overlay">
                            <div className="modal">
                            <div className="modal-header">
                                    <h3>Changelog - Version 1.6 - ⚡ Zeus Update</h3>
                                    <button
                                        className="close-button"
                                        onClick={() => setShowChangelog(false)}
                                        aria-label="Close changelog"
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                                <div className="modal-content">
                                    <ul>
                                        <li>Surgical Operations Forms added</li>
                                        <li>New plugin has been added to support multiple-dropdowns. </li>
                                        <li>Moved from Create-React-App to ViteJS </li>
                                        <li>Added support for clipboard image uploads </li>
                                        <li>Added Character Limit Warning to prevent PHPBB issues</li>
                                        <li>Fixed backend errors</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                        <h5>This website is maintained by Alyson Frost, you can view the Github repository in the header.</h5>
                    <div className="button-group">
                        <button
                            type="button"
                            className="changelog-button"
                            onClick={() => window.open('https://phmc.gta.world/', '_blank')}
                        >
                            <i className="fas fa-hospital"></i>
                            PHMC
                        </button>
                        <button
                            className="changelog-button"
                            onClick={toggleAgencySelector}
                        >
                            <i className="fas fa-exchange-alt"></i>
                            Switch Department
                        </button>

                        {(bbCodeVersion === 1 || bbCodeVersion === 2 || bbCodeVersion === 18) && (
    <>
        <button
            className="changelog-button"
            onClick={() => setShowPHMCModal(true)}
        >
            <i className="fa fa-laptop"></i>
            <span>Coroner Forms </span>
        </button>

        {showPHMCModal && (
            <div className="modal-overlay" onClick={() => setShowPHMCModal(false)}>
                <div className="agency-selector-modal" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4>Coroner Forms (2)</h4>
                        <button
                            className="close-button"
                            onClick={() => setShowPHMCModal(false)}
                            aria-label="Close selector"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div className="agency-selector-buttons">
                        <div className="agency-row">
                            <button
                                className="agency-select-button"
                                onClick={() => handleAgencySelect(1)}
                            >
                                <img src={corpse}
                                    className="Center"
                                    alt="Feedback"
                                />
                                <span>Decedent Services </span>
                            </button>
                            <button
                                className="agency-select-button"
                                onClick={() => handleAgencySelect(2)}
                                                    >
                                    <img src={email}
                                    className="Center"
                                    alt="Feedback"
                                />
                                <span>Email Generator </span>
                            </button>
                            <button
                                className="agency-select-button"
                                onClick={() => handleAgencySelect(18)}
                                                    >
                                    <img src={PHMCLogo}
                                    className="Center"
                                    alt="Feedback"
                                />
                                <span>Agency Incidents </span>
                            </button>
                            <button
                                className="agency-select-button"
                                onClick={() => handleAgencySelect(18)}
                                                    >
                                    <img src={PHMCLogo}
                                    className="Center"
                                    alt="Feedback"
                                />
                                <span>Resignation Forms </span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
)}

{(bbCodeVersion === 3 || bbCodeVersion === 7) && (
    <>
        <button
            className="changelog-button"
            onClick={() => setShowPHMCModal(true)}
        >
            <i className="fas fa-times"></i>
            <span>Internal Medicine Consultation Forms</span>
        </button>

        {showPHMCModal && (
            <div className="modal-overlay" onClick={() => setShowPHMCModal(false)}>
                <div className="agency-selector-modal" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4>Select Internal Medicine Consultation Form (2)</h4>
                        <button
                            className="close-button"
                            onClick={() => setShowPHMCModal(false)}
                            aria-label="Close selector"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div className="agency-selector-buttons">
                        <div className="agency-row">
                            <button
                                className="agency-select-button"
                                onClick={() => handleAgencySelect(3)}
                            >
                                <img src={PHMCLogo}
                                    className="Center"
                                    alt="Feedback"
                                />
                                <span>Internal Medicine Consult | NEW FILE </span>
                            </button>
                            <button
                                className="agency-select-button"
                                onClick={() => handleAgencySelect(7)}
                                                    >
                                    <img src={PHMCLogo}
                                    className="Center"
                                    alt="Feedback"
                                />
                                <span>Internal Medicine Consult | ADD FILES </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
)}
{(bbCodeVersion === 9 || bbCodeVersion === 10 || bbCodeVersion === 12 || bbCodeVersion === 13) && (
    <>
        <button
            className="changelog-button"
            onClick={() => setShowPHMCModal(true)}
                                >
        <i className="fa-solid fa-plus"></i>
            <span>Gyne and Obs Forms</span>
        </button>

        {showPHMCModal && (
            <div className="modal-overlay" onClick={() => setShowPHMCModal(false)}>
                <div className="agency-selector-modal" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4>Gynecology and Obstetrics Forms (4)</h4>
                        <button
                            className="close-button"
                            onClick={() => setShowPHMCModal(false)}
                            aria-label="Close selector"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div className="agency-selector-buttons">
                        <div className="agency-row">
                            <button
                                className="agency-select-button"
                                onClick={() => handleAgencySelect(9)}
                                                    >
                                                        <img src={maternity}
                                    className="Center"
                                    alt="Feedback"
                                />
                                <span>Obstetrics Main File</span>
                            </button>
                            <button
                                className="agency-select-button"
                                onClick={() => handleAgencySelect(10)}
                                                    >
                                    <img src={obstetrical}
                                    className="Center"
                                    alt="Feedback"
                                />

                                <span>Obstetrics Follow Up</span>
                                                    </button>
                            <button
                                className="agency-select-button"
                                onClick={() => handleAgencySelect(12)}
                                                    >
                                    <img src={gyne}
                                    className="Center"
                                    alt="Feedback"
                                />

                                <span>Gynecology Main File</span>
                            </button>
                            <button
                                className="agency-select-button"
                                onClick={() => handleAgencySelect(13)}
                                                    >
                                <img src={gynecology}
                                    className="Center"
                                    alt="Feedback"
                                    />
                                <span>Gynecology Follow Up</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
)}
{(bbCodeVersion === 8 || bbCodeVersion === 11) && (
    <>
        <button
            className="changelog-button"
            onClick={() => setShowPHMCModal(true)}
        >
            <span>Emergency Medicine Consultation Forms </span>
        </button>

        {showPHMCModal && (
            <div className="modal-overlay" onClick={() => setShowPHMCModal(false)}>
                <div className="agency-selector-modal" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4>Select Emergency Medicine Consultation Form (2)</h4>
                        <button
                            className="close-button"
                            onClick={() => setShowPHMCModal(false)}
                            aria-label="Close selector"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div className="agency-selector-buttons">
                        <div className="agency-row">
                            <button
                                className="agency-select-button"
                                onClick={() => handleAgencySelect(8)}
                            >
                                <img src={PHMCLogo}
                                    className="Center"
                                    alt="Feedback"
                                />
                                <span>Emergency Medicine Consult | NEW FILE </span>
                            </button>
                            <button
                                className="agency-select-button"
                                onClick={() => handleAgencySelect(11)}
                                                    >
                                    <img src={PHMCLogo}
                                    className="Center"
                                    alt="Feedback"
                                />
                                <span>Emergency Medicine Consult | ADD FILES </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
)}
{(bbCodeVersion === 14 || bbCodeVersion === 15 || bbCodeVersion === 16 || bbCodeVersion === 17) && (
    <>
        <button
            className="changelog-button"
            onClick={() => setShowPHMCModal(true)}
                                >
        <i className="fa-solid fa-plus"></i>
            <span>Mental Health Forms</span>
        </button>

        {showPHMCModal && (
            <div className="modal-overlay" onClick={() => setShowPHMCModal(false)}>
                <div className="agency-selector-modal" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4>Select Mental Health Forms (4)</h4>
                        <button
                            className="close-button"
                            onClick={() => setShowPHMCModal(false)}
                            aria-label="Close selector"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div className="agency-selector-buttons">
                        <div className="agency-row">
                            <button
                                className="agency-select-button"
                                onClick={() => handleAgencySelect(14)}
                                                    >
                                                        <img src={psychology}
                                    className="Center"
                                    alt="Feedback"
                                />
                                <span>Mental Health - Main File</span>
                            </button>
                            <button
                                className="agency-select-button"
                                onClick={() => handleAgencySelect(15)}
                                                    >
                                    <img src={empathy}
                                    className="Center"
                                    alt="Feedback"
                                />

                                <span>Mental Health - Visitation</span>
                                                    </button>
                            <button
                                className="agency-select-button"
                                onClick={() => handleAgencySelect(16)}
                                                    >
                                    <img src={mentalhealth}
                                    className="Center"
                                    alt="Feedback"
                                />

                                <span>Mental Health - Risk Update</span>
                            </button>
                            <button
                                className="agency-select-button"
                                onClick={() => handleAgencySelect(17)}
                                                    >
                                <img src={noshow}
                                    className="Center"
                                    alt="Feedback"
                                    />
                                <span>Mental Health - No Session</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
)}

                </div>
                    {notification && (
                        <Notification
                            message={notification.message}
                            icon={notification.icon}
                            onDismiss={() => setNotification(null)}
                        />
                    )}
                    <form>
                        {bbCodeVersion === 1 ? (
                            <>
                                <p>The Coroner Report Generated needs to be filled out fully, you can upload images locally or link pictures. </p>
                                    <Form.Label>Employee Credentials:</Form.Label>
                                <Select
    name="coronerEmployee"
    value={coronerGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.coronerEmployee) || null}
    onChange={(selectedOption) => handleSelectChange(selectedOption, 'coroner')}
    options={coronerGroupedOptions}
    isClearable
    placeholder="Search or select coroner..."
    className="form-control"
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
    />
                                    <Form.Label><br></br>Dispatch Date and Time:</Form.Label>
                                    <Form.Control
                                        type="datetime-local"
                                        name="dateTime"
                                        value={formData.dateTime}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                />
                                                                        <Form.Select
                                        name="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        required
                                        className="form-select"
                                    >
                                        <option value="" disabled>Select Requesting Agency</option>
                                        <option value="LSFD">LSFD</option>
                                        <option value="LSPD">LSPD</option>
                                        <option value="LSSD">LSSD</option>
                                        <option value="PHMC">PHMC</option>
                                        <option value="SANFIRE">SANFIRE</option>
                                        <option value="SADCR">SADCR</option>
                                        <option value="LSGOV">LSGOV</option>
                                        <option value="911 Call">Emergency 911 Dispatch</option>
                                        <option value="Protech">Protech Security Solutions</option>

                                    </Form.Select>

                                    <div className="radio-inline-container">
                                        <span className="radio-text">Decedent Name:</span>
                                        <div className="radio-button-group">
                                            <Form.Check
                                                type="radio"
                                                id="johnDoe"
                                                label="   John Doe"
                                                checked={isJohnDoe}
                                                onChange={handleDoeChange('john')}
                                                inline
                                            />
                                            <Form.Check
                                                type="radio"
                                                id="janeDoe"
                                                label="   Jane Doe"
                                                checked={isJaneDoe}
                                                onChange={handleDoeChange('jane')}
                                                inline
                                            />
                                        </div>
                                    </div>
                                    <Form.Control
                                        type="text"
                                        name="decedentName"
                                        value={formData.decedentName}
                                    onChange={handleChange}
                                        placeholder="Decedent's IC name"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="decedentOOC"
                                        value={formData.decedentOOC}
                                        onChange={handleChange}
                                        placeholder="Decedent's OOC name"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Select
                                        name="typeOfDeath"
                                        value={formData.typeOfDeath}
                                        onChange={handleChange}
                                        required
                                        className="form-select"
                                >
                                        <option value="..." >Select Type of Death</option>
                                        <option value="PK">PK</option>
                                        <option value="CK">CK</option>
                                    </Form.Select>
                                    <Form.Control
                                        type="text"
                                        name="placeOfDeath"
                                        value={formData.placeOfDeath}
                                        onChange={handleChange}
                                        placeholder="Place of death"
                                        required
                                        className="form-control"
                                />
                                    <Form.Select
                                        name="mannerOfDeath"
                                        value={formData.mannerOfDeath}
                                        onChange={handleChange}
                                        required
                                        className="form-select"
                                    >
                                        <option value="" disabled>Select Manner of Death</option>
                                        <option value="Natural">Natural - the death resulted from natural causes, such as disease or old age.</option>
                                        <option value="Accident">Accidental - the death resulted from an unintentional or unexpected event, such as a car accident or drug overdose.</option>
                                        <option value="Suicide">Suicide - the death resulted from a self-inflicted injury with the intention to end ones life.</option>
                                        <option value="Homicide">Homicide - the death resulted from the intentional actions of another person, such as a murder, manslaughter and/or legally justified means such as self defense. </option>
                                        <option value="Undetermined">Undetermined - the evidence is insufficient to determine the manner of death</option>
                                    </Form.Select>

                                    <Form.Label>Pronounced Time of Death:</Form.Label>
                                    <Form.Control
                                        type="datetime-local"
                                        name="pronouncedTimeOfDeath"
                                        value={formData.pronouncedTimeOfDeath}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        as="textarea"
                                        name="synopsis"
                                        value={formData.synopsis}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Brief Summary"
                                        required
                                        className="form-control"
                                />
                                  <Form.Control
                                        type="text"
                                        name="probableCauseOfDeath"
                                        value={formData.probableCauseOfDeath}
                                    onChange={handleChange}
                                        placeholder="Probable cause of death"
                                        required
                                        className="form-control"
                                    />

                                <Form.Group className="mb-3 upload-container">
                                    <InputGroup>
                                    <Form.Control
                                    as="textarea"
                                    name="scenePhotos"
                                    value={formData.scenePhotos}
                                    onChange={handleChange}
                                    rows="2"
                                    required
                                    className="form-control"
                                    placeholder="Upload Scene Photos (comma-separated)"
                                    onPaste={(e) => {
                                        console.log('Paste event triggered');
                                        const clipboardData = e.clipboardData || window.clipboardData;
                                        const pastedData = clipboardData.getData('text');
                                        const items = clipboardData.items;
                                        
                                        console.log('Pasted content:', pastedData);
                                        console.log('Clipboard items:', items);
                                        
                                        let hasImageItem = false;
                                        
                                        // Check if pasted content is a URL
                                        const urlRegex = /(https?:\/\/[^\s]+)/g;
                                        const containsUrl = urlRegex.test(pastedData);
                                        
                                        console.log('Contains URL:', containsUrl);
                                        
                                        // Handle image files from clipboard
                                        for (let i = 0; i < items.length; i++) {
                                            console.log('Checking item:', items[i].type);
                                            if (items[i].type.indexOf('image') !== -1) {
                                                hasImageItem = true;
                                                const file = items[i].getAsFile();
                                                handleImageUpload({ target: { files: [file] } }, 'scenePhotos');
                                                e.preventDefault();
                                                break;
                                            }
                                        }
                                        
                                        // If it's a URL and not an image file, allow direct paste
                                        if (containsUrl && !hasImageItem) {
                                            console.log('Processing URL paste');
                                            
                                            // Get current value and cursor position
                                            const currentValue = formData.scenePhotos || '';
                                            const cursorPos = e.target.selectionStart;
                                            
                                            console.log('Current value:', currentValue);
                                            console.log('Cursor position:', cursorPos);
                                            
                                            // Add comma if there's existing content
                                            const separator = currentValue && currentValue.trim().length > 0 ? ', ' : '';
                                            const newValue = currentValue.slice(0, cursorPos) + 
                                                        (cursorPos > 0 ? separator : '') + 
                                                        pastedData + 
                                                        currentValue.slice(cursorPos);
                                            
                                            console.log('New value:', newValue);
                                            
                                            // Update form data
                                            setFormData(prev => ({
                                                ...prev,
                                                scenePhotos: newValue
                                            }));
                                            
                                            e.preventDefault();
                                        } else {
                                            console.log('No URL detected or image item present');
                                        }
                                    }}
                                />                                        
<Button
                                            variant="success"
                                            disabled={isUploading}
                                            onClick={() => {
                                                const input = document.createElement('input');
                                                input.type = 'file';
                                                input.accept = 'image/*';
                                                input.multiple = true;
                                                input.onchange = (e) => handleImageUpload(e, 'scenePhotos');
                                                input.click();
                                            }}
                                        >
                                            <i className={`fas ${isUploading ? 'fa-spinner fa-spin' : 'fa-upload'}`}></i>
                                            {isUploading ? 'Uploading...' : 'Upload Images'}
                                        </Button>

                                    </InputGroup>
                                    <span className="helper-text">
                                        This supports clipboard uploading, ctrl + V! | Hosted by ImgBB! - <a href="https://imgbb.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                                    </span>
                                </Form.Group>
                                <Form.Group className="mb-3 upload-container">
                                    <div className="input-group">
                                        <Form.Control
                                            as="textarea"
                                            name="additionalImages"
                                            value={formData.additionalImages}
                                            onChange={handleChange}
                                            rows="2"
                                            required
                                            className="form-control"
                                            placeholder="Morgue Screen, Cinjuries, CDNA Links (comma-separated)"
                                            onPaste={(e) => {
                                                console.log('Paste event triggered');
                                                const clipboardData = e.clipboardData || window.clipboardData;
                                                const pastedData = clipboardData.getData('text');
                                                const items = clipboardData.items;
                                                
                                                console.log('Pasted content:', pastedData);
                                                console.log('Clipboard items:', items);
                                                
                                                let hasImageItem = false;
                                                
                                                // Check if pasted content is a URL
                                                const urlRegex = /(https?:\/\/[^\s]+)/g;
                                                const containsUrl = urlRegex.test(pastedData);
                                                
                                                console.log('Contains URL:', containsUrl);
                                                
                                                // Handle image files from clipboard
                                                for (let i = 0; i < items.length; i++) {
                                                    console.log('Checking item:', items[i].type);
                                                    if (items[i].type.indexOf('image') !== -1) {
                                                        hasImageItem = true;
                                                        const file = items[i].getAsFile();
                                                        handleImageUpload({ target: { files: [file] } }, 'additionalImages');
                                                        e.preventDefault();
                                                        break;
                                                    }
                                                }
                                                
                                                // If it's a URL and not an image file, allow direct paste
                                                if (containsUrl && !hasImageItem) {
                                                    console.log('Processing URL paste');
                                                    
                                                    // Get current value and cursor position
                                                    const currentValue = formData.additionalImages || '';
                                                    const cursorPos = e.target.selectionStart;
                                                    
                                                    console.log('Current value:', currentValue);
                                                    console.log('Cursor position:', cursorPos);
                                                    
                                                    // Add comma if there's existing content
                                                    const separator = currentValue && currentValue.trim().length > 0 ? ', ' : '';
                                                    const newValue = currentValue.slice(0, cursorPos) + 
                                                                (cursorPos > 0 ? separator : '') + 
                                                                pastedData + 
                                                                currentValue.slice(cursorPos);
                                                    
                                                    console.log('New value:', newValue);
                                                    
                                                    // Update form data
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        additionalImages: newValue
                                                    }));
                                                    
                                                    e.preventDefault();
                                                } else {
                                                    console.log('No URL detected or image item present');
                                                }
                                            }}
                                        />                                        
                                                <Button
                                            variant="success"
                                            disabled={isUploading}
                                            onClick={() => {
                                                const input = document.createElement('input');
                                                input.type = 'file';
                                                input.accept = 'image/*';
                                                input.multiple = true;
                                                input.onchange = (e) => handleImageUpload(e, 'additionalImages');
                                                input.click();
                                            }}
                                        >
                                            <i className={`fas ${isUploading ? 'fa-spinner fa-spin' : 'fa-upload'}`}></i>
                                            {isUploading ? 'Uploading...' : 'Upload Images'}
                                        </Button>
                                    </div>
                                    <span className="helper-text">
                                    This supports clipboard uploading, ctrl + V! | Hosted by ImgBB! - <a href="https://imgbb.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                                    </span>
                                    <label>Morgue Bugs:</label>
                                    <Form.Check
        type="checkbox"
        id="morgueStatus"
        label="       Tick if Morgue Screen is unavailable / broken / inaccesssable"
        checked={formData.morgueStatus === 'true'}
        onChange={(e) => setFormData(prev => ({
            ...prev,
            morgueStatus: e.target.checked.toString()
        }))}
    />

                                </Form.Group>
                            </>
                        ) : bbCodeVersion === 2 ? (
                            <>
                                <p>This generator prefills most of the forms for you, take a moment to review the BBCode prior to sending! </p>
                                <Form.Label>Employee Credentials:</Form.Label>
                                <Select
    name="coronerEmployee"
    value={coronerGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.coronerEmployee) || null}
    onChange={(selectedOption) => handleSelectChange(selectedOption, 'coroner')}
    options={coronerGroupedOptions}
    isClearable
    placeholder="Search or select coroner..."
    className="form-control"
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
    />
                                    <Form.Group className="mb-3">
                                    <Form.Label> <br></br>Officer Name or Badge Number:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="requestingOfficer"
                                        value={formData.requestingOfficer}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Requesting Agency:</Form.Label>
                                    <Form.Select
                                        name="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        required
                                        className="form-select"
                                    >
                                        <option value="" disabled>Select Department</option>
                                        <option value="LSFD">LSFD</option>
                                        <option value="LSPD">LSPD</option>
                                        <option value="LSSD">LSSD</option>
                                        <option value="PHMC">PHMC</option>
                                        <option value="SANFIRE">SANFIRE</option>
                                        <option value="SADCR">SADCR</option>
                                        <option value="LSGOV">LSGOV</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        Coroner Contact Number:
                                    </Form.Label>
                                    <span className="helper-text">
                                        (By default PHMC Landline is added, if you have a work number please add it)
                                    </span>

                                    <Form.Control
                                        type="text"
                                        name="coronerPHNumber"
                                        value={formData.coronerPHNumber}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Decedent(s) Names:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="decedentName"
                                        value={formData.decedentName}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Decedent OOC Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="decedentOOC"
                                        value={formData.decedentOOC}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Paste Death Report BBCode:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="deathReport"
                                        value={formData.deathReport}
                                        onChange={handleChange}
                                        placeholder="Paste Death Report"
                                        rows="2"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Additional Reports:</Form.Label>
                                    <div className="reports-container">
                                        {formData.additionalReports.map((report, index) => (
                                            <div key={index} className="report-input">
                                                <Form.Control
                                                    as="textarea"
                                                    value={report}
                                                    onChange={(e) => handleReportChange(index, e.target.value)}
                                                    placeholder="Paste additional coroner report here"
                                                    rows="4"
                                                    className="form-control"
                                                />
                                                <Button
                                                    variant="danger"
                                                    onClick={() => removeReport(index)}
                                                    className="remove-report-button"
                                                >
                                                    REMOVE REPORT
                                                </Button>
                                            </div>
                                        ))}
                                        <div className="email-buttons">
                                            <Button
                                                variant="success"
                                                onClick={addReport}
                                                className="email-button"
                                            >
                                                <i className="fas fa-plus"></i> Add Report
                                            </Button>
                                            <Button
                                                variant="primary"
                                                onClick={parseBBCode}
                                                className="email-button"
                                            >
                                                <i className="fas fa-copy"></i> Parse BBCode
                                            </Button>
                                            <Button
                                                variant="danger"
                                                onClick={clearParsedBBCode}
                                                className="remove-report-button"
                                            >
                                                <i className="fas fa-times"></i> Clear BBCode
                                            </Button>
                                        </div>

                                    </div>
                                </Form.Group>
                            </>
                        ) : bbCodeVersion === 3 ? (
                            <>
                                        <p>The FORM below is intended for the opening of a medical file, it must appear at the top.</p>
            <Form.Label>Employee Credentials:</Form.Label>

            <Select
    name="phmcEmployee"
    value={phmcGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.phmcEmployee) || null}
    onChange={(selectedOption) => {
        handleChange({
            target: {
                name: 'phmcEmployee',
                value: selectedOption?.value || ''
            }
        });
        if (selectedOption) {
            setFormData(prev => ({
                ...prev,
                phmcSignature: selectedOption.signature || ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                phmcSignature: ''
            }));
        }
    }}
    options={phmcGroupedOptions}
    isClearable
    placeholder="Search or select doctor..."
    className="form-control"  // Match Bootstrap styling
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
                                        />     
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phmcSignature"
                                        value={formData.phmcSignature}
                                        onChange={handleChange}
                                        placeholder="Employee Signature"
                                        required
                                    />

                                <Form.Group className="mb-3">
                                    <Form.Label>Section 1: Medical Patient Record</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientMedicalRecord"
                                        value={formData.patientMedicalRecord}
                                        onChange={handleChange}
                                        placeholder="Patient Number"
                                        required
                                            />
                                     </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Section 2: Patient Demographics</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientName"
                                        value={formData.patientName}
                                        onChange={handleChange}
                                        placeholder="Patient Name"
                                        required
                                    />
                                    <Form.Select
                                        name="patientGender"
                                        value={formData.patientGender}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Select>
                                    <Form.Text className="text-muted">
                                        Patient's date of birth
                                    </Form.Text>
                                    <Form.Control
                                        type="date"
                                        name="patientDateofBirth"
                                        value={formData.patientDateofBirth}
                                        onChange={handleChange}
                                        placeholder="Date of Birth"
                                        required
                                    />
                                    <Form.Control
                                        type="tel"
                                        name="patientPH"
                                        value={formData.patientPH}
                                        onChange={handleChange}
                                        placeholder="Telephone Number"
                                        required
                                    />
                                    <Form.Control
                                        type="email"
                                        name="patientEmail"
                                        value={formData.patientEmail}
                                        onChange={handleChange}
                                        placeholder="Email Address / ((Include a Discord handle if available))"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientAddress"
                                        value={formData.patientAddress}
                                        onChange={handleChange}
                                        placeholder="Home Address"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Section 3: Emergency Contact Information</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientEmergencyContact"
                                        value={formData.patientEmergencyContact}
                                        onChange={handleChange}
                                        placeholder="Emergency Contact Name"
                                        required
                                    />
                                    <Form.Control
                                        type="tel"
                                        name="patientEmergencyContactNumber"
                                        value={formData.patientEmergencyContactNumber}
                                        onChange={handleChange}
                                        placeholder="Emergency Contact Number"
                                        required
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientEmergencyContactRelation"
                                        value={formData.patientEmergencyContactRelation}
                                        onChange={handleChange}
                                        placeholder="Relation to Patient"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Section 4: Health Status Information</Form.Label>
                                    <Form.Select
                                        name="patientBloodType"
                                        value={formData.patientBloodType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Blood Type</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </Form.Select>
                                    <Form.Control
                                        as="textarea"
                                        name="patientChronicDiseases"
                                        value={formData.patientChronicDiseases}
                                        onChange={handleChange}
                                        placeholder="Known Chronic Diseases"
                                        rows="2"
                                    />
                                    <Form.Control
                                        as="textarea"
                                        name="patientAllergies"
                                        value={formData.patientAllergies}
                                        onChange={handleChange}
                                        placeholder="Known Allergies"
                                        rows="2"
                                    />
                                </Form.Group>
                            </>
                        ) : bbCodeVersion === 4 ? (
                            // Dental Consultation fields
                            <>
                                            <p>The generated form must be used and added to the file for each medical appointment, follow the others.</p>
                                            <Form.Label>Employee Credentials:</Form.Label>

            <Select
    name="phmcEmployee"
    value={phmcGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.phmcEmployee) || null}
    onChange={(selectedOption) => {
        handleChange({
            target: {
                name: 'phmcEmployee',
                value: selectedOption?.value || ''
            }
        });
        if (selectedOption) {
            setFormData(prev => ({
                ...prev,
                phmcSignature: selectedOption.signature || ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                phmcSignature: ''
            }));
        }
    }}
    options={phmcGroupedOptions}
    isClearable
    placeholder="Search or select doctor..."
    className="form-control"  // Match Bootstrap styling
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
                                        />     
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phmcSignature"
                                        value={formData.phmcSignature}
                                        onChange={handleChange}
                                        placeholder="Employee Signature"
                                        required
                                    />

                                <Form.Group className="mb-3">
                                    <Form.Label>Patient Information</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="PatientMedicalRecord"
                                        value={formData.PatientMedicalRecord}
                                        onChange={handleChange}
                                        placeholder="Medical Record Number"
                                        required
                                    />
                                    <Form.Control
                                        type="text"
                                        name="PatientName"
                                        value={formData.PatientName}
                                        onChange={handleChange}
                                        placeholder="Patient Full Name"
                                        required
                                    />
                                    <Form.Text className="text-muted">
                                        Patient's date of birth
                                    </Form.Text>
                                    <Form.Control
                                        type="date"
                                        name="patientDateofBirth"
                                        value={formData.patientDateofBirth}
                                        onChange={handleChange}
                                        placeholder="Date of Birth"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Physical Assessment</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientWeight"
                                        value={formData.patientWeight}
                                        onChange={handleChange}
                                        placeholder="Weight"
                                        required
                                    />
                                    <Form.Select
                                        name="patientChewing"
                                        value={formData.patientChewing}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Chewing Problems</option>
                                        <option value="No Issues">No Issues</option>
                                        <option value="Mild Difficulty">Mild Difficulty</option>
                                        <option value="Moderate Difficulty">Moderate Difficulty</option>
                                        <option value="Severe Difficulty">Severe Difficulty</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Priority Classification</Form.Label>
<Form.Label>Priority Classification</Form.Label>
<Select
  name="PatientPriority"
  isMulti
  value={priorityOptions.filter(option => 
    formData[option.value]
  )}
  onChange={(selectedOptions) => {
    const updates = {
      patientFormYes: false,
      patientFormNo: false, 
      patientMale: false,
      patientFormYes2: false
    };
    
    selectedOptions.forEach(option => {
      updates[option.value] = true;
    });

    setFormData(prev => ({
      ...prev,
      ...updates
    }));
  }}
  options={priorityOptions}
  placeholder="Select priority criteria..."
  className="form-control"
  styles={{
    control: (base) => ({
      ...base,
      backgroundColor: '#16202c',
      color: '#eeeeeeb0',
      borderColor: '#6c757d',
      '&:hover': {
        borderColor: '#eeeeeeb0'
      }
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: '#30363d',
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: '#eeeeeeb0',
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: '#eeeeeeb0',
      ':hover': {
        backgroundColor: '#dc3545',
        color: 'white',
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: '#16202c',
      zIndex: 1000
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? 'Grey' : '#16202c',
      color: '#eeeeeeb0'
    }),
    input: (base) => ({
      ...base,
      color: '#eeeeeeb0'
    }),
    placeholder: (base) => ({
      ...base,
      color: '#eeeeeeb0'
    })
  }}
/>
                                        </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Medications</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="patientMedicine"
                                        value={formData.patientMedicine}
                                        onChange={handleChange}
                                        placeholder="Current Medications"
                                        rows="2"
                                    />
                                    <Form.Control
                                        as="textarea"
                                        name="patientNewMedicine"
                                        value={formData.patientNewMedicine}
                                        onChange={handleChange}
                                        placeholder="Prescribed Medications"
                                        rows="2"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Diagnosis & Treatment</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="patientDiagnosis"
                                        value={formData.patientDiagnosis}
                                        onChange={handleChange}
                                        placeholder="Diagnosis"
                                        rows="3"
                                        required
                                    />
                                    <Form.Control
                                        as="textarea"
                                        name="patientTreatment"
                                        value={formData.patientTreatment}
                                        onChange={handleChange}
                                        placeholder="Treatment Plan"
                                        rows="3"
                                        required
                                    />
                                    <Form.Control
                                        as="textarea"
                                        name="patientPrescription"
                                        value={formData.patientPrescription}
                                        onChange={handleChange}
                                        placeholder="Prescriptions"
                                        rows="2"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Consultation Summary</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="patientSummary"
                                        value={formData.patientSummary}
                                        onChange={handleChange}
                                        placeholder="Summary of Consultation"
                                        rows="4"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Appointment Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </>
                        ) : bbCodeVersion === 5 ? (
                            <>
                                <p>The FORM below must be used and added to the file for each surgery appointment, following the others.</p>
            <Form.Label>Employee Credentials:</Form.Label>

            <Select
    name="phmcEmployee"
    value={phmcGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.phmcEmployee) || null}
    onChange={(selectedOption) => {
        handleChange({
            target: {
                name: 'phmcEmployee',
                value: selectedOption?.value || ''
            }
        });
        if (selectedOption) {
            setFormData(prev => ({
                ...prev,
                phmcSignature: selectedOption.signature || ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                phmcSignature: ''
            }));
        }
    }}
    options={phmcGroupedOptions}
    isClearable
    placeholder="Search or select doctor..."
    className="form-control"  // Match Bootstrap styling
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
                                        />     
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phmcSignature"
                                        value={formData.phmcSignature}
                                        onChange={handleChange}
                                        placeholder="Employee Signature"
                                        required
                                    />
                                <Form.Group className="mb-3">
                                    <Form.Label>Additional Staff:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="extraStaff"
                                        value={formData.extraStaff}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                        placeholder="Enter staff present (( Leave N/A if NPCed )) "
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Patient Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientName"
                                        value={formData.patientName}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                        placeholder="Eden Sawyer"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Medical Record Number:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientMedicalRecord"
                                        value={formData.patientMedicalRecord}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                        placeholder="Enter patient's medical record number"
                                    />
                                </Form.Group>
                                <h5>Section 2: Surgical Inquiry</h5>
                                <Form.Group className="mb-3">
                                    <Form.Label>Did the patient or their family consent, or did they have a life threatening or severe injury that requires immediate surgical intervention?</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientConsent"
                                        value={formData.patientConsent}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                        placeholder=""
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Did any medical complications occur during the surgery</Form.Label>
                                    <Form.Select
                                        name="surgeryComplications"
                                        value={formData.surgeryComplications}
                                        onChange={handleChange}
                                        required
                                        className="form-select"
                                    >
                                        <option value="">Select...</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Was the procedure completed successfully, and did it result in the desired clinical outcome?</Form.Label>
                                    <Form.Select
                                        name="surgeryProcedures"
                                        value={formData.surgeryProcedures}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    >
                                        <option value="">Select...</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                </Form.Group>
                                <h5>Section 3: Post-Anesthesia Report</h5>
                                <Form.Group className="mb-3">
                                    <Form.Label>Known Current Medication:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientMedicine"
                                        value={formData.patientMedicine}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                        placeholder="Enter patient's current medication"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Known Allergies:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientAllergies"
                                        value={formData.patientAllergies}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                        placeholder="Enter patient's known allergies"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Type & Dosage of Anesthesia Administered:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="drugType"
                                        value={formData.drugType}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                        placeholder="Enter patient's known allergies"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Post-Operative Anesthesia Details:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="postDrugtype"
                                        value={formData.postDrugtype}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                        placeholder="Post Operative Anesthesia Details"
                                    />
                                </Form.Group>
                                <h5>Section 4: Summary of Surgical Procedure Performed</h5>
                                <Form.Group className="mb-3">
                                    <Form.Label>Summerize Surgical Procedure:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="surgicalSummery"
                                        value={formData.surgicalSummery}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                        placeholder="Summary of surgical procedure performed"
                                        rows="4"
                                    />
                                </Form.Group>
                                <h5>SECTION 5: DATE OF SURGERY</h5>
                                <Form.Group className="mb-3">
                                    <Form.Label>Date of Surgery:</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="surgeryTime"
                                        value={formData.surgeryTime}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>

                            </>
                        ) : bbCodeVersion === 6 ? ( // generatePhysEvalInternalMed
                            <>
                                <p>The FORM below must be used and added to the file for each medical appointment, following the others.</p>
            <Form.Label>Employee Credentials:</Form.Label>

            <Select
    name="phmcEmployee"
    value={phmcGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.phmcEmployee) || null}
    onChange={(selectedOption) => {
        handleChange({
            target: {
                name: 'phmcEmployee',
                value: selectedOption?.value || ''
            }
        });
        if (selectedOption) {
            setFormData(prev => ({
                ...prev,
                phmcSignature: selectedOption.signature || ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                phmcSignature: ''
            }));
        }
    }}
    options={phmcGroupedOptions}
    isClearable
    placeholder="Search or select doctor..."
    className="form-control"  // Match Bootstrap styling
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
                                        />     
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phmcSignature"
                                        value={formData.phmcSignature}
                                        onChange={handleChange}
                                        placeholder="Employee Signature"
                                        required
                                    />
                                <Form.Group className="mb-3">
                                    <Form.Label>Patient Information</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientName"
                                        value={formData.patientName}
                                        onChange={handleChange}
                                        placeholder="Patient Name"
                                        required
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientGender"
                                        value={formData.patientGender}
                                        onChange={handleChange}
                                        placeholder="Gender"
                                        required
                                                        />
                                   <Form.Text className="text-muted">
                                        Patient's date of birth
                                    </Form.Text>
                                    <Form.Control
                                        type="date"
                                        name="patientDateofBirth"
                                        value={formData.patientDateofBirth}
                                        onChange={handleChange}
                                        placeholder="Date of Birth"
                                        required
                                    />
                                      <Form.Control
                                        type="text"
                                        name="patientRace"
                                        value={formData.patientRace}
                                        onChange={handleChange}
                                        placeholder="Patient Race"
                                        required
                                     />

                                    <Form.Control
                                        type="tel"
                                        name="patientPH"
                                        value={formData.patientPH}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                                        />
                                                                        <Form.Control
                                        type="text"
                                        name="patientDiscord"
                                        value={formData.patientDiscord}
                                        onChange={handleChange}
                                        placeholder="Patient Email ((And Discord))"
                                    />

                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Measurements</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientHeight"
                                        value={formData.patientHeight}
                                        onChange={handleChange}
                                        placeholder="Height"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientWeight"
                                        value={formData.patientWeight}
                                        onChange={handleChange}
                                        placeholder="Weight"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientBMI"
                                        value={formData.patientBMI}
                                        onChange={handleChange}
                                        placeholder="BMI"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Vitals</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientTemperature"
                                        value={formData.patientTemperature}
                                        onChange={handleChange}
                                        placeholder="Temperature"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientBPM"
                                        value={formData.patientBPM}
                                        onChange={handleChange}
                                        placeholder="Heart Rate (BPM)"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientpulse"
                                        value={formData.patientpulse}
                                        onChange={handleChange}
                                        placeholder="Respiration Rate"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientOxi"
                                        value={formData.patientOxi}
                                        onChange={handleChange}
                                        placeholder="Oxygen Saturation (%)"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientBP"
                                        value={formData.patientBP}
                                        onChange={handleChange}
                                        placeholder="Blood Pressure (MMHG)"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Medical History</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientCareer"
                                        value={formData.patientCareer}
                                        onChange={handleChange}
                                        placeholder="Previous Occupation"
                                    />
                                    <Form.Control
                                        as="textarea"
                                        name="patientImpairments"
                                        value={formData.patientImpairments}
                                        onChange={handleChange}
                                        placeholder="Medical Conditions/Impairments"
                                        rows="3"
                                                        />
                                   <Form.Control
                                        as="textarea"
                                        name="patientMedicine"
                                        value={formData.patientMedicine}
                                        onChange={handleChange}
                                        placeholder="Patient Medicine (Regular Basis)"
                                        rows="2"
                                    />
                                  <Form.Control
                                        as="textarea"
                                        name="patientAllergies"
                                        value={formData.patientAllergies}
                                        onChange={handleChange}
                                        placeholder="Known Allergies"
                                        rows="2"
                                    />

                                    <Form.Control
                                        as="textarea"
                                        name="patientPastDiseases"
                                        value={formData.patientPastDiseases}
                                        onChange={handleChange}
                                        placeholder="Family Medical History"
                                        rows="3"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Assessment</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="patientAssessment"
                                        value={formData.patientAssessment}
                                        onChange={handleChange}
                                        placeholder="Assessment Summary"
                                        rows="4"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Examination Date</Form.Label>
                                    <Form.Control
                                        type="datetime-local"
                                        name="appointmentDate"
                                        value={formData.appointmentDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                            </>
                        ) : bbCodeVersion === 7 ? ( // generateMedConsultIntMedReply
                            <>
                                <p>The FORM below must be used and added to the file for each medical appointment, following the others.</p>
                                            <Form.Label>Employee Credentials:</Form.Label>

            <Select
    name="phmcEmployee"
    value={phmcGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.phmcEmployee) || null}
    onChange={(selectedOption) => {
        handleChange({
            target: {
                name: 'phmcEmployee',
                value: selectedOption?.value || ''
            }
        });
        if (selectedOption) {
            setFormData(prev => ({
                ...prev,
                phmcSignature: selectedOption.signature || ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                phmcSignature: ''
            }));
        }
    }}
    options={phmcGroupedOptions}
    isClearable
    placeholder="Search or select doctor..."
    className="form-control"  // Match Bootstrap styling
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
                                        />     
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phmcSignature"
                                        value={formData.phmcSignature}
                                        onChange={handleChange}
                                        placeholder="Employee Signature"
                                        required
                                    />
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 1: Medical Patient Record</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientMedicalRecord"
                                        value={formData.patientMedicalRecord}
                                        onChange={handleChange}
                                        placeholder="Patient Number"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientName"
                                        value={formData.patientName}
                                        onChange={handleChange}
                                        placeholder="Patient Name"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Text className="text-muted">
                                        Patient's date of birth
                                    </Form.Text>
                                    <Form.Control
                                        type="date"
                                        name="patientDateofBirth"
                                        value={formData.patientDateofBirth}
                                        onChange={handleChange}
                                        placeholder="Date of Birth"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 2: Vitals</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientHeight"
                                        value={formData.patientHeight}
                                        onChange={handleChange}
                                        placeholder="Height"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientWeight"
                                        value={formData.patientWeight}
                                        onChange={handleChange}
                                        placeholder="Weight"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientTemperature"
                                        value={formData.patientTemperature}
                                        onChange={handleChange}
                                        placeholder="Body Temperature"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientBPM"
                                        value={formData.patientBPM}
                                        onChange={handleChange}
                                        placeholder="Heart Rate (BPM)"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientResperation"
                                        value={formData.patientResperation}
                                        onChange={handleChange}
                                        placeholder="Respiration Rate"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientpulse"
                                        value={formData.patientpulse}
                                        onChange={handleChange}
                                        placeholder="Pulse Oximetry"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientBP"
                                        value={formData.patientBP}
                                        onChange={handleChange}
                                        placeholder="Blood Pressure"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 3: Medications</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientCurrentMedicine"
                                        value={formData.patientCurrentMedicine}
                                        onChange={handleChange}
                                        placeholder="Patient's Current Medicines"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientNewMedicine"
                                        value={formData.patientNewMedicine}
                                        onChange={handleChange}
                                        placeholder="Newly issued medicine to patient"
                                        required
                                        className="form-control"
                                    />

                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 4: Patient Assessment</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientConsultation"
                                        value={formData.patientConsultation}
                                        onChange={handleChange}
                                        placeholder="Viewed For"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        as="textarea"
                                        name="patientDiagnosis"
                                        value={formData.patientDiagnosis}
                                        onChange={handleChange}
                                        placeholder="Diagnosis"
                                        rows="3"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        as="textarea"
                                        name="patientTreatment"
                                        value={formData.patientTreatment}
                                        onChange={handleChange}
                                        placeholder="Treatment Plan"
                                        rows="3"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        as="textarea"
                                        name="patientPerscription"
                                        value={formData.patientPerscription}
                                        onChange={handleChange}
                                        placeholder="Prescribed Medications"
                                        rows="3"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Section 5: Summary</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="patientSummaryConsultation"
                                        value={formData.patientSummaryConsultation}
                                        onChange={handleChange}
                                        placeholder="Summary of Consultation"
                                        rows="4"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Appointment Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>

                            </>
                        ) : bbCodeVersion === 8 ? ( // Emergency Medical File2
                            <>
                                                            <h5>(The FORM below is intended for the opening of a basic medical file, it must appear at the top.)</h5>
                                            <Form.Label>Employee Credentials:</Form.Label>

            <Select
    name="phmcEmployee"
    value={phmcGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.phmcEmployee) || null}
    onChange={(selectedOption) => {
        handleChange({
            target: {
                name: 'phmcEmployee',
                value: selectedOption?.value || ''
            }
        });
        if (selectedOption) {
            setFormData(prev => ({
                ...prev,
                phmcSignature: selectedOption.signature || ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                phmcSignature: ''
            }));
        }
    }}
    options={phmcGroupedOptions}
    isClearable
    placeholder="Search or select doctor..."
    className="form-control"  // Match Bootstrap styling
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
                                        />     
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phmcSignature"
                                        value={formData.phmcSignature}
                                        onChange={handleChange}
                                        placeholder="Employee Signature"
                                        required
                                    />
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 1: Medical Patient Record</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientMedicalRecord"
                                        value={formData.patientMedicalRecord}
                                        onChange={handleChange}
                                        placeholder="Patient Number"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Section 2: Patient Demographics</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientName"
                                        value={formData.patientName}
                                        onChange={handleChange}
                                        placeholder="Patient Name"
                                        required
                                    />
                                    <Form.Select
                                            name="patientGender"
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setFormData(prev => ({
                                                    ...prev,
                                                    patientMale: value === 'male',
                                                    patientFemale: value === 'female'
                                                }));
                                            }}
                                        >
                                            <option value="...">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </Form.Select>
                                    <Form.Text className="text-muted">
                                        Patient's date of birth
                                    </Form.Text>
                                    <Form.Control
                                        type="date"
                                        name="patientDateofBirth"
                                        value={formData.patientDateofBirth}
                                        onChange={handleChange}
                                        placeholder="Date of Birth"
                                        required
                                    />
                                    <Form.Control
                                        type="tel"
                                        name="patientPH"
                                        value={formData.patientPH}
                                        onChange={handleChange}
                                        placeholder="Telephone Number"
                                        required
                                    />
                                    <Form.Control
                                        type="email"
                                        name="patientEmail"
                                        value={formData.patientEmail}
                                        onChange={handleChange}
                                        placeholder="Email Address / ((Include a Discord handle if available))"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientAddress"
                                        value={formData.patientAddress}
                                        onChange={handleChange}
                                        placeholder="Home Address"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Section 3: Emergency Contact Information</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientEmergencyContact"
                                        value={formData.patientEmergencyContact}
                                        onChange={handleChange}
                                        placeholder="Emergency Contact Name"
                                        required
                                    />
                                    <Form.Control
                                        type="tel"
                                        name="patientEmergencyContactNumber"
                                        value={formData.patientEmergencyContactNumber}
                                        onChange={handleChange}
                                        placeholder="Emergency Contact Number"
                                        required
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientEmergencyContactRelation"
                                        value={formData.patientEmergencyContactRelation}
                                        onChange={handleChange}
                                        placeholder="Relation to Patient"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Section 4: Health Status Information</Form.Label>
                                    <Form.Select
                                        name="patientBloodType"
                                        value={formData.patientBloodType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Blood Type</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </Form.Select>
                                    <Form.Control
                                        as="textarea"
                                        name="patientChronicDiseases"
                                        value={formData.patientChronicDiseases}
                                        onChange={handleChange}
                                        placeholder="Known Chronic Diseases"
                                        rows="2"
                                    />
                                    <Form.Control
                                        as="textarea"
                                        name="patientAllergies"
                                        value={formData.patientAllergies}
                                        onChange={handleChange}
                                        placeholder="Known Allergies"
                                        rows="2"
                                    />
                                </Form.Group>
                            </>
                        ) : bbCodeVersion === 9 ? ( // generateObsMainFile
                            <>
                                    <h5>OBSTETRICS ONLY - MAIN FILE</h5>
                                                                <h5>(The FORM below is intended for the opening of a basic medical file, it must appear at the top.)</h5>
                                            <Form.Label>Employee Credentials:</Form.Label>

            <Select
    name="phmcEmployee"
    value={phmcGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.phmcEmployee) || null}
    onChange={(selectedOption) => {
        handleChange({
            target: {
                name: 'phmcEmployee',
                value: selectedOption?.value || ''
            }
        });
        if (selectedOption) {
            setFormData(prev => ({
                ...prev,
                phmcSignature: selectedOption.signature || ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                phmcSignature: ''
            }));
        }
    }}
    options={phmcGroupedOptions}
    isClearable
    placeholder="Search or select doctor..."
    className="form-control"  // Match Bootstrap styling
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
                                        />     
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phmcSignature"
                                        value={formData.phmcSignature}
                                        onChange={handleChange}
                                        placeholder="Employee Signature"
                                        required
                                    />
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 0: Patient Information</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientMedicalRecord"
                                        value={formData.patientMedicalRecord}
                                        onChange={handleChange}
                                        placeholder="Patient Number"
                                        required
                                                                    />
                                        <Form.Control
                                            type="text"
                                            name="patientName"
                                            value={formData.patientName}
                                            onChange={handleChange}
                                            placeholder="Patient Name"
                                            required
                                                                    />
                                            <Form.Text className="text-muted">
                                        Patient's date of birth
                                    </Form.Text>

                                    <Form.Control
                                        type="date"
                                        name="patientDateofBirth"
                                        value={formData.patientDateofBirth}
                                        onChange={handleChange}
                                        placeholder="Patient Number"
                                        required
                                    />
                                    <Form.Label>Partner Information</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientPartnerName"
                                        value={formData.patientPartnerName}
                                        onChange={handleChange}
                                        placeholder="Patient Partner Name"
                                        required
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientPartnerPH"
                                        value={formData.patientPartnerPH}
                                        onChange={handleChange}
                                        placeholder="Patient Partner Phone Number"
                                        required
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientPartnerDiscord"
                                        value={formData.patientPartnerDiscord}
                                        onChange={handleChange}
                                        placeholder="Patient Partner Email (( & Discord ))"
                                        required
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientJob"
                                        value={formData.patientJob}
                                        onChange={handleChange}
                                        placeholder="Patient Employeer"
                                        required
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientJobTasks"
                                        value={formData.patientJobTasks}
                                        onChange={handleChange}
                                        placeholder="Patient Job Tasks"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Section 1: Health Story</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientPreHealth"
                                        value={formData.patientPreHealth}
                                        onChange={handleChange}
                                        placeholder="Health problems, medications, allergies, surgical procedures, problems related to anesthesia, depression, etc."
                                        required
                                    />

                                    <Form.Select
                                        type="text"
                                        name="patientAdditionalPregnancy"
                                        value={formData.patientAdditionalPregnancy}
                                        onChange={handleChange}
                                        
                                        required
                                    >
                                        <option value="">Multiple Pregnancies</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select> 
                                    
                                    <Form.Control
                                        type="text"
                                        name="patientBaggageofParents"
                                        value={formData.patientBaggageofParents}
                                        onChange={handleChange}
                                        placeholder="Baggage of Parents"
                                        required
                                    />
                                    <Form.Select
                                        type="text"
                                        name="patientPregProblems"
                                        value={formData.patientPregProblems}
                                        onChange={handleChange}
                                        
                                        required
                                    >
                                        <option value="">Previous Gynecological Problems</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                    <Form.Text className="text-muted">This covers Patient's Living Habits.</Form.Text>
                                    <Form.Control
                                        type="text"
                                        name="patientLivingHabits"
                                        value={formData.patientLivingHabits}
                                        onChange={handleChange}
                                        placeholder="Diet, physical activity, smoking, alcohol and drugs."
                                        required
                                    />
                                    <Form.Label>Section 2: Patient Measurements</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientHeight"
                                        value={formData.patientHeight}
                                        onChange={handleChange}
                                        placeholder="Patient's Height"
                                    />

                                    <Form.Control
                                        type="text"
                                        name="patientWeight"
                                        value={formData.patientWeight}
                                        onChange={handleChange}
                                        placeholder="Patient's Weight"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Section 3: Vitals</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientTemperature"
                                        value={formData.patientTemperature}
                                        onChange={handleChange}
                                        placeholder="Body Temperature"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientBPM"
                                        value={formData.patientBPM}
                                        onChange={handleChange}
                                        placeholder="Heart Rate (BPM)"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientResperation"
                                        value={formData.patientResperation}
                                        onChange={handleChange}
                                        placeholder="Respiration Rate"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientOxi"
                                        value={formData.patientOxi}
                                        onChange={handleChange}
                                        placeholder="Pulse Oximetry"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientBP"
                                        value={formData.patientBP}
                                        onChange={handleChange}
                                        placeholder="Blood Pressure"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Section 4: Abdominal or Transvaginal Ultrasound<br></br></Form.Label>
                                    <Form.Text className="text-muted">Date of Pregnancy.</Form.Text>
                                    <Form.Control
                                        type="date"
                                        name="patientDateofPregnancy"
                                        value={formData.patientDateofPregnancy}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                    <Form.Label>Identification of Multiple Pregnancies:</Form.Label>
                                        <Form.Select 
                                        name="violenceHistory"
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setFormData(prev => ({
                                                ...prev,
                                                oneFetus: value === 'One',
                                                twoFetuses: value === 'Two',
                                                threeFetuses: value === 'Three',
                                                fourFetuses: value === 'Four',
                                            }));
                                        }}
                                    >
                                        <option value="">Number of Fetus</option>
                                        <option value="One">One Fetus</option>
                                        <option value="Two">Two Fetus</option>
                                        <option value="Three">Three Fetus</option>
                                        <option value="Four">Four or more</option>
                                    </Form.Select>

                                    <Form.Control
                                        type="text"
                                        name="patientFetalMeasurements"
                                        value={formData.patientFetalMeasurements}
                                        onChange={handleChange}
                                        placeholder="Fetal Measurements"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 5: Gynecological and Biological Examinations</Form.Label>
                                    <Form.Text className="text-muted"><br></br>Last Well Woman Exam.</Form.Text>
                                    <Form.Control
                                        type="date"
                                        name="patientWellWomanExam"
                                        value={formData.patientWellWomanExam}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                        />
                                    <Form.Select
                                        type="text"
                                        name="patientPap"
                                        value={formData.patientPap}
                                        onChange={handleChange}
                                        
                                        required
                                    >
                                        <option value="">Pap Smear</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                    <Form.Control
                                        type="text"
                                        name="patientPapResults"
                                        value={formData.patientPapResults}
                                        onChange={handleChange}
                                        placeholder="Pap Smear Results"
                                        required
                                        className="form-control"
                                        />
                                    <Form.Select
                                        type="text"
                                        name="patientSTI"
                                        value={formData.patientSTI}
                                        onChange={handleChange}
                                        
                                        required
                                    >
                                        <option value="">STI Screaning</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                    <Form.Control
                                        type="text"
                                        name="patientSTIResults"
                                        value={formData.patientSTIResults}
                                        onChange={handleChange}
                                        placeholder="STI Results"
                                        required
                                        className="form-control"
                                        />

                                    <Form.Select
                                        type="text"
                                        name="patientBloodAnalysis"
                                        value={formData.patientBloodAnalysis}
                                        onChange={handleChange}
                                        
                                        required
                                    >
                                        <option value="">Blood Analysis</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                    <Form.Control
                                        type="text"
                                        name="patientBloodAnalysisResults"
                                        value={formData.patientBloodAnalysisResults}
                                        onChange={handleChange}
                                        placeholder="Patient Blood Analysis Results"
                                        required
                                        className="form-control"
                                        />
                                    <Form.Select
                                        type="text"
                                        name="patientUrine"
                                        value={formData.patientUrine}
                                        onChange={handleChange}
                                        
                                        required
                                    >
                                        <option value="">Urine Analysis</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                    <Form.Control
                                        type="text"
                                        name="patientUrineResults"
                                        value={formData.patientUrineResults}
                                        onChange={handleChange}
                                        placeholder="Patient Urine Results"
                                        required
                                        className="form-control"
                                        />
                                </Form.Group>
                                <Form.Label>Section 6: Summary of Consultation </Form.Label>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        as="textarea"
                                        name="patientSummaryConsultation"
                                        value={formData.patientSummaryConsultation}
                                        onChange={handleChange}
                                        placeholder="Summary of Consultation"
                                        rows="4"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Label>Appointment Date</Form.Label>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                
                                </Form.Group>
                            </>
                        ) : bbCodeVersion === 10 ? ( // generateObsFollowup
                            <>
                                <h5> The FORM below should be used and added to the file, following the others.<br></br>(( Please note that it isn't mandatory to make a medical record for every patient you meet in the ER. You can either do it if you feel like it, offer it to the patient or simply do it at the patient's request. ))</h5>
            <Form.Label>Employee Credentials:</Form.Label>

            <Select
    name="phmcEmployee"
    value={phmcGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.phmcEmployee) || null}
    onChange={(selectedOption) => {
        handleChange({
            target: {
                name: 'phmcEmployee',
                value: selectedOption?.value || ''
            }
        });
        if (selectedOption) {
            setFormData(prev => ({
                ...prev,
                phmcSignature: selectedOption.signature || ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                phmcSignature: ''
            }));
        }
    }}
    options={phmcGroupedOptions}
    isClearable
    placeholder="Search or select doctor..."
    className="form-control"  // Match Bootstrap styling
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
                                        />     
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phmcSignature"
                                        value={formData.phmcSignature}
                                        onChange={handleChange}
                                        placeholder="Employee Signature"
                                        required
                                    />
                                                                    <Form.Label>Section 0: Patient Information</Form.Label>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="patientMedicalRecord"
                                        value={formData.patientMedicalRecord}
                                        onChange={handleChange}
                                        placeholder="Patient Medical Number"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientName"
                                        value={formData.patientName}
                                        onChange={handleChange}
                                        placeholder="Patient's name"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Text className="text-muted"> Patient's date of birth</Form.Text>
                                    <Form.Control
                                        type="date"
                                        name="patientDateofBirth"
                                        value={formData.patientDateofBirth}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                    </Form.Group>
                                    <Form.Label>Section 1: Patient Health Status</Form.Label>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                    type="date"
                                    name="patientDateofPregnancy"
                                    value={formData.patientDateofPregnancy}
                                    onChange={handleChange}
                                    placeholder="Date of Pregnancy"
                                    required
                                    className="form-control"
                                />
                                <Form.Select
                                    name="patientContractions"
                                    value={formData.patientContractions}
                                    onChange={handleChange}
                                    placeholder="Is the Patient suffering from contractions?  - CHANGE TO YES/NO"
                                    required
                                    className="form-control"
                                    >
                                    <option value="">Is Patient suffering from contractions?</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Form.Select>
                                <Form.Select
                                    name="patientBleeding"
                                    value={formData.patientBleeding}
                                    onChange={handleChange}
                                    required
                                    className="form-control"
                                    >
                                    <option value="">Is Patient suffering from discharge or bleeding?</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Form.Select>
                                <Form.Select
                                    name="patientDiscomfort"
                                    value={formData.patientDiscomfort}
                                    onChange={handleChange}
                                    required
                                    className="form-control"
                                    >
                                    <option value="">Patient Discomfort during urination?</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Form.Select>
                                <Form.Select
                                    name="patientFetalMeasurements"
                                    value={formData.patientFetalMeasurements}
                                    onChange={handleChange}
                                    required
                                    className="form-control"
                                >
                                    <option value="">Fetal Measurements</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Form.Select>
                                </Form.Group>
                                <Form.Label>Section 2: Patient Weight</Form.Label>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="patientWeight"
                                        value={formData.patientWeight}
                                        onChange={handleChange}
                                        placeholder="Patient's Weight"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientFatter"
                                        value={formData.patientFatter}
                                        onChange={handleChange}
                                        placeholder="Patient's Height"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>


                                    <Form.Group className="mb-3">
                                    <Form.Label>Section 3: Vitals</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientTemperature"
                                        value={formData.patientTemperature}
                                        onChange={handleChange}
                                        placeholder="Temperature"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientBPM"
                                        value={formData.patientBPM}
                                        onChange={handleChange}
                                        placeholder="Heart Rate (BPM)"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientResperation"
                                        value={formData.patientResperation}
                                        onChange={handleChange}
                                        placeholder="Respiration Rate"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientOxi"
                                        value={formData.patientOxi}
                                        onChange={handleChange}
                                        placeholder="Oxygen Saturation (%)"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientBP"
                                        value={formData.patientBP}
                                        onChange={handleChange}
                                        placeholder="Blood Pressure (MMHG)"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 4: Abdominal Ultrasonography</Form.Label>
                                    <Form.Select
                                        name="patientBabyGender"
                                        value={formData.patientBabyGender}
                                        onChange={handleChange}
                                        placeholder="Baby Gender"
                                        > 
                                        <option value=""> Baby Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Select>
                                    <Form.Select
                                        name="patientKnowBabyGender"
                                        value={formData.patientKnowBabyGender}
                                        onChange={handleChange}
                                    >
                                        <option value="">Does the Patient know the gender of the baby?</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                    <Form.Control
                                        type="text"
                                        name="patientUltraSummary"
                                        value={formData.patientUltraSummary}
                                        onChange={handleChange}
                                        placeholder="Summary of the Ultrasound"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 5: Biological Examinations</Form.Label>
                                    <Form.Select
                                        name="patientBloodAnalysis"
                                        value={formData.patientBloodAnalysis}
                                        onChange={handleChange}
                                    >
                                        <option value="">Has a blood analysis been performed?</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                     <Form.Control
                                        type="text"
                                        name="patientBloodAnalysisResults"
                                        value={formData.patientBloodAnalysisResults}
                                        onChange={handleChange}
                                        placeholder="Patient Blood Analysis Results"
                                                                        />
                                    <Form.Select
                                        name="patientUrine"
                                        value={formData.patientUrine}
                                        onChange={handleChange}
                                    >
                                        <option value="">Has a Urine analysis been performed?</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>

                                      <Form.Control
                                        type="text"
                                        name="patientUrineResults"
                                        value={formData.patientUrineResults}
                                        onChange={handleChange}
                                        placeholder="Urine Analysis"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 6: Summary of Consultation</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="patientSummaryConsultation"
                                        value={formData.patientSummaryConsultation}
                                        onChange={handleChange}
                                        placeholder="Summary of Consultation"
                                    />
                                                                    </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Appointment Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                        </>
                        ) : bbCodeVersion === 11 ? ( // generateMedConsultEmergencyMedForm2
                            <>
                                <h5> The FORM below should be used and added to the file, following the others.<br></br>(( Please note that it isn't mandatory to make a medical record for every patient you meet in the ER. You can either do it if you feel like it, offer it to the patient or simply do it at the patient's request. ))</h5>
            <Form.Label>Employee Credentials:</Form.Label>

            <Select
    name="phmcEmployee"
    value={phmcGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.phmcEmployee) || null}
    onChange={(selectedOption) => {
        handleChange({
            target: {
                name: 'phmcEmployee',
                value: selectedOption?.value || ''
            }
        });
        if (selectedOption) {
            setFormData(prev => ({
                ...prev,
                phmcSignature: selectedOption.signature || ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                phmcSignature: ''
            }));
        }
    }}
    options={phmcGroupedOptions}
    isClearable
    placeholder="Search or select doctor..."
    className="form-control"  // Match Bootstrap styling
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
                                        />     
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phmcSignature"
                                        value={formData.phmcSignature}
                                        onChange={handleChange}
                                        placeholder="Employee Signature"
                                        required
                                    />
                                                                        <Form.Group className="mb-3">
                                    <Form.Label>Section 0: Patient Information</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientMedicalRecord"
                                        value={formData.patientMedicalRecord}
                                        onChange={handleChange}
                                        placeholder="Patient Number"
                                        required
                                        className="form-control"
                                                                            />
                                                                        <Form.Control
                                        type="text"
                                        name="patientName"
                                        value={formData.patientName}
                                        onChange={handleChange}
                                        placeholder="Patient Name"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Text className="text-muted">
                                        Patient's date of birth
                                    </Form.Text>
                                    <Form.Control
                                        type="date"
                                        name="patientDateofBirth"
                                        value={formData.patientDateofBirth}
                                        onChange={handleChange}
                                        placeholder="Date of Birth"
                                        required
                                        className="form-control"
                                    />

                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 1: Patient Condition</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientCondition"
                                        value={formData.patientCondition}
                                        onChange={handleChange}
                                        placeholder="Patient Condition / Consciousness"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Section 2: VITALS</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientTemperature"
                                        value={formData.patientTemperature}
                                        onChange={handleChange}
                                        placeholder="Body Temperature"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientBPM"
                                        value={formData.patientBPM}
                                        onChange={handleChange}
                                        placeholder="Heart Rate (BPM)"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientResperation"
                                        value={formData.patientResperation}
                                        onChange={handleChange}
                                        placeholder="Respiration Rate"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientOxi"
                                        value={formData.patientOxi}
                                        onChange={handleChange}
                                        placeholder="Pulse Oximetry"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientBP"
                                        value={formData.patientBP}
                                        onChange={handleChange}
                                        placeholder="Blood Pressure"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 3: Medications</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientCurrentMedicine"
                                        value={formData.patientCurrentMedicine}
                                        onChange={handleChange}
                                        placeholder="Patients Current Medication"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="textarea"
                                        name="patientNewMedicine"
                                        value={formData.patientNewMedicine}
                                        onChange={handleChange}
                                        placeholder="Newly issued Medicine to Patient"
                                        rows="3"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 4: Diagnosis</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientConsultation"
                                        value={formData.patientConsultation}
                                        onChange={handleChange}
                                        placeholder="Viewed For"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="textarea"
                                        name="patientDiagnosis"
                                        value={formData.patientDiagnosis}
                                        onChange={handleChange}
                                        placeholder="Diagnosis"
                                        rows="3"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="textarea"
                                        name="patientTreatment"
                                        value={formData.patientTreatment}
                                        onChange={handleChange}
                                        placeholder="Treatment Plan"
                                        rows="3"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="textarea"
                                        name="patientNotes"
                                        value={formData.patientNotes}
                                        onChange={handleChange}
                                        placeholder="Results of any Lab Results / Allergies / Pre existing Conditions & diseases"
                                                                                rows="3"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Section 5: Summary of Consultation</Form.Label>
                                    <Form.Control
                                        type="textarea"
                                        name="patientSummaryConsultation"
                                        value={formData.patientSummaryConsultation}
                                        onChange={handleChange}
                                        placeholder="Summary of Consultation"
                                        rows="4"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Appointment Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>
                                                        </>
                        ) : bbCodeVersion === 12 ? ( // generateGyneMainFile
                                                                        <>
                                                                            <h5>(The FORM below is intended for the opening of a basic medical file, it must appear at the top.)</h5>
                                            <Form.Label>Employee Credentials:</Form.Label>

            <Select
    name="phmcEmployee"
    value={phmcGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.phmcEmployee) || null}
    onChange={(selectedOption) => {
        handleChange({
            target: {
                name: 'phmcEmployee',
                value: selectedOption?.value || ''
            }
        });
        if (selectedOption) {
            setFormData(prev => ({
                ...prev,
                phmcSignature: selectedOption.signature || ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                phmcSignature: ''
            }));
        }
    }}
    options={phmcGroupedOptions}
    isClearable
    placeholder="Search or select doctor..."
    className="form-control"  // Match Bootstrap styling
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
                                        />     
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phmcSignature"
                                        value={formData.phmcSignature}
                                        onChange={handleChange}
                                        placeholder="Employee Signature"
                                        required
                                    />
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 0: Personal Information</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientMedicalRecord"
                                        value={formData.patientMedicalRecord}
                                        onChange={handleChange}
                                        placeholder="Patient Number"
                                        required
                                                                    />
                                        <Form.Control
                                            type="text"
                                            name="patientName"
                                            value={formData.patientName}
                                            onChange={handleChange}
                                            placeholder="Patient Name"
                                            required
                                                                    />
                                            <Form.Text className="text-muted">
                                        Patient's date of birth
                                    </Form.Text>

                                    <Form.Control
                                        type="date"
                                        name="patientDateofBirth"
                                        value={formData.patientDateofBirth}
                                        onChange={handleChange}
                                        placeholder="Patient Number"
                                        required
                                    />
                                    <Form.Label>Partner Information</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientPartnerName"
                                        value={formData.patientPartnerName}
                                        onChange={handleChange}
                                        placeholder="Patient Partner Name"
                                        required
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientPartnerPH"
                                        value={formData.patientPartnerPH}
                                        onChange={handleChange}
                                        placeholder="Patient Partner Phone Number"
                                        required
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientPartnerDiscord"
                                        value={formData.patientPartnerDiscord}
                                        onChange={handleChange}
                                        placeholder="Patient Partner Email (( & Discord ))"
                                        required
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientJob"
                                        value={formData.patientJob}
                                        onChange={handleChange}
                                        placeholder="Patient Employeer"
                                        required
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientJobTasks"
                                        value={formData.patientJobTasks}
                                        onChange={handleChange}
                                        placeholder="Patient Job Tasks"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Section 1: Health Story</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientPreHealth"
                                        value={formData.patientPreHealth}
                                        onChange={handleChange}
                                        placeholder="Gynecological Problems"
                                        required
                                    />
                                    
                                    <Form.Control
                                        type="text"
                                        name="patientBaggageofParents"
                                        value={formData.patientBaggageofParents}
                                        onChange={handleChange}
                                        placeholder="Baggage of Parents"
                                        required
                                    />
                                    <Form.Text className="text-muted">This covers Patient's Living Habits.</Form.Text>
                                    <Form.Control
                                        type="text"
                                        name="patientLivingHabits"
                                        value={formData.patientLivingHabits}
                                        onChange={handleChange}
                                        placeholder="Diet, physical activity, smoking, alcohol and drugs."
                                        required
                                    />
                                    <Form.Label>Section 2: Patient Measurements</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientHeight"
                                        value={formData.patientHeight}
                                        onChange={handleChange}
                                        placeholder="Patient's Height"
                                    />

                                    <Form.Control
                                        type="text"
                                        name="patientWeight"
                                        value={formData.patientWeight}
                                        onChange={handleChange}
                                        placeholder="Patient's Weight"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Section 3: Vitals</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientTemperature"
                                        value={formData.patientTemperature}
                                        onChange={handleChange}
                                        placeholder="Body Temperature"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientBPM"
                                        value={formData.patientBPM}
                                        onChange={handleChange}
                                        placeholder="Heart Rate (BPM)"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientResperation"
                                        value={formData.patientResperation}
                                        onChange={handleChange}
                                        placeholder="Respiration Rate"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientOxi"
                                        value={formData.patientOxi}
                                        onChange={handleChange}
                                        placeholder="Pulse Oximetry"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientBP"
                                        value={formData.patientBP}
                                        onChange={handleChange}
                                        placeholder="Blood Pressure"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Section 4: Abdominal or Transvaginal Ultrasound</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientNotes"
                                        value={formData.patientNotes}
                                        onChange={handleChange}
                                        placeholder="Findings of Ultrasound"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 5: Gynecological and Biological Examinations</Form.Label>
                                    <Form.Text className="text-muted"><br></br>Last Well Woman Exam.</Form.Text>
                                    <Form.Control
                                        type="date"
                                        name="patientWellWomanExam"
                                        value={formData.patientWellWomanExam}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                        />
                                    <Form.Select
                                        type="text"
                                        name="patientPap"
                                        value={formData.patientPap}
                                        onChange={handleChange}
                                        
                                        required
                                    >
                                        <option value="">Pap Smear</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                    <Form.Control
                                        type="text"
                                        name="patientPapResults"
                                        value={formData.patientPapResults}
                                        onChange={handleChange}
                                        placeholder="Pap Smear Results"
                                        required
                                        className="form-control"
                                        />
                                    <Form.Select
                                        type="text"
                                        name="patientSTI"
                                        value={formData.patientSTI}
                                        onChange={handleChange}
                                        
                                        required
                                    >
                                        <option value="">STI Screaning</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                    <Form.Control
                                        type="text"
                                        name="patientSTIResults"
                                        value={formData.patientSTIResults}
                                        onChange={handleChange}
                                        placeholder="STI Results"
                                        required
                                        className="form-control"
                                        />

                                    <Form.Select
                                        type="text"
                                        name="patientBloodAnalysis"
                                        value={formData.patientBloodAnalysis}
                                        onChange={handleChange}
                                        
                                        required
                                    >
                                        <option value="">Blood Analysis</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                    <Form.Control
                                        type="text"
                                        name="patientBloodAnalysisResults"
                                        value={formData.patientBloodAnalysisResults}
                                        onChange={handleChange}
                                        placeholder="Patient Blood Analysis Results"
                                        required
                                        className="form-control"
                                        />
                                    <Form.Select
                                        type="text"
                                        name="patientUrine"
                                        value={formData.patientUrine}
                                        onChange={handleChange}
                                        
                                        required
                                    >
                                        <option value="">Urine Analysis</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                    <Form.Control
                                        type="text"
                                        name="patientUrineResults"
                                        value={formData.patientUrineResults}
                                        onChange={handleChange}
                                        placeholder="Patient Urine Results"
                                        required
                                        className="form-control"
                                        />
                                </Form.Group>
                                <Form.Label>SECTION 6: SUMMARY OF CONSULTATION</Form.Label>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        as="textarea"
                                        name="patientSummaryConsultation"
                                        value={formData.patientSummaryConsultation}
                                        onChange={handleChange}
                                        placeholder="Summary of Consultation"
                                        rows="4"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Label>Appointment Date</Form.Label>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>
                                </>
                            ) : bbCodeVersion === 13 ? ( // generateGyneFollowUp
                            <>
                                <h5> This is the GYNE FOLLOW UP FORM.<br></br>(( Please note that it isn't mandatory to make a medical record for every patient you meet in the ER. You can either do it if you feel like it, offer it to the patient or simply do it at the patient's request. ))</h5>
            <Form.Label>Employee Credentials:</Form.Label>

            <Select
    name="phmcEmployee"
    value={phmcGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.phmcEmployee) || null}
    onChange={(selectedOption) => {
        handleChange({
            target: {
                name: 'phmcEmployee',
                value: selectedOption?.value || ''
            }
        });
        if (selectedOption) {
            setFormData(prev => ({
                ...prev,
                phmcSignature: selectedOption.signature || ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                phmcSignature: ''
            }));
        }
    }}
    options={phmcGroupedOptions}
    isClearable
    placeholder="Search or select doctor..."
    className="form-control"  // Match Bootstrap styling
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
                                        />     
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phmcSignature"
                                        value={formData.phmcSignature}
                                        onChange={handleChange}
                                        placeholder="Employee Signature"
                                        required
                                    />
                                                                                <Form.Group className="mb-3">
                                    <Form.Label>Section 0: Patient Information</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientMedicalRecord"
                                        value={formData.patientMedicalRecord}
                                        onChange={handleChange}
                                        placeholder="Patient Number"
                                        required
                                        className="form-control"
                                                                            />
                                                                        <Form.Control
                                        type="text"
                                        name="patientName"
                                        value={formData.patientName}
                                        onChange={handleChange}
                                        placeholder="Patient Name"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Text className="text-muted">
                                        Patient's date of birth
                                    </Form.Text>
                                    <Form.Control
                                        type="date"
                                        name="patientDateofBirth"
                                        value={formData.patientDateofBirth}
                                        onChange={handleChange}
                                        placeholder="Date of Birth"
                                        required
                                        className="form-control"
                                    />

                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 1: Patient Health Status</Form.Label>
                                    <Form.Select
                                    name="patientBleeding"
                                    value={formData.patientBleeding}
                                    onChange={handleChange}
                                    required
                                    className="form-control"
                                    >
                                    <option value="">Is Patient suffering from discharge or bleeding?</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Form.Select>
                                <Form.Select
                                    name="patientDiscomfort"
                                    value={formData.patientDiscomfort}
                                    onChange={handleChange}
                                    required
                                    className="form-control"
                                    >
                                    <option value="">Is Patient experiencing during urination? </option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 2: Patient Weight</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientWeight"
                                        value={formData.patientWeight}
                                        onChange={handleChange}
                                        placeholder="Patient's Weight"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientFatter"
                                        value={formData.patientFatter}
                                        onChange={handleChange}
                                        placeholder="Patient's Weight Gained"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 3: Vitals</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientTemperature"
                                        value={formData.patientTemperature}
                                        onChange={handleChange}
                                        placeholder="Body Temperature"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientBPM"
                                        value={formData.patientBPM}
                                        onChange={handleChange}
                                        placeholder="Heart Rate (BPM)"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientResperation"
                                        value={formData.patientResperation}
                                        onChange={handleChange}
                                        placeholder="Respiration Rate"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientOxi"
                                        value={formData.patientOxi}
                                        onChange={handleChange}
                                        placeholder="Pulse Oximetry"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientBP"
                                        value={formData.patientBP}
                                        onChange={handleChange}
                                        placeholder="Blood Pressure"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 4: Abdominal or Transvaginal Ultrasonography</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientUltraSummary"
                                        value={formData.patientUltraSummary}
                                        onChange={handleChange}
                                        placeholder="Finding's of the Ultrasound"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section 5: Biological Examinations </Form.Label>
                                    <Form.Select
                                    name="patientBloodAnalysis"
                                    value={formData.patientBloodAnalysis}
                                    onChange={handleChange}
                                    required
                                    className="form-control"
                                    >
                                    <option value="">Was a Blood Analysis conducted? </option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Form.Select>

                                    <Form.Control
                                        type="text"
                                        name="patientBloodAnalysisResults"
                                        value={formData.patientBloodAnalysisResults}
                                        onChange={handleChange}
                                        placeholder="Patient Blood Analysis Results"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Select
                                    name="patientUrine"
                                    value={formData.patientUrine}
                                    onChange={handleChange}
                                    required
                                    className="form-control"
                                    >
                                    <option value="">Was a Urine Analysis conducted? </option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Form.Select>
                                    <Form.Control
                                        type="text"
                                        name="patientUrineResults"
                                        value={formData.patientUrineResults}
                                        onChange={handleChange}
                                        placeholder="Patient Urine Results"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Section 5: Summary of Consultation</Form.Label>
                                    <Form.Control
                                        type="textarea"
                                        name="patientSummaryConsultation"
                                        value={formData.patientSummaryConsultation}
                                        onChange={handleChange}
                                        placeholder="Summary of Consultation"
                                        rows="4"
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Appointment Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                </Form.Group>
                                                        </>
                        ) : bbCodeVersion === 14 ? ( // generateMentalHealthMainFile
                            <>
            <Form.Label>Employee Credentials:</Form.Label>

            <Select
    name="phmcEmployee"
    value={phmcGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.phmcEmployee) || null}
    onChange={(selectedOption) => {
        handleChange({
            target: {
                name: 'phmcEmployee',
                value: selectedOption?.value || ''
            }
        });
        if (selectedOption) {
            setFormData(prev => ({
                ...prev,
                phmcSignature: selectedOption.signature || ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                phmcSignature: ''
            }));
        }
    }}
    options={phmcGroupedOptions}
    isClearable
    placeholder="Search or select doctor..."
    className="form-control"  // Match Bootstrap styling
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
                                        />     
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phmcSignature"
                                        value={formData.phmcSignature}
                                        onChange={handleChange}
                                        placeholder="Employee Signature"
                                        required
                                    />
        <Form.Group className="mb-3"> 
                                    <Form.Label>File Information</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="patientFileCreation"
                                        value={formData.patientFileCreation}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                    <Form.Select 
                                        name="File Status"
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setFormData(prev => ({
                                                ...prev,
                                                caseOpen: value === 'open',
                                                caseClosed: value === 'closed'
                                            }));
                                        }}
                                    >
                                        <option value="..."> File Status</option>
                                        <option value="open">Open</option>
                                        <option value="closed">Closed</option>
                                    </Form.Select>
                                    <Form.Control
                                        type="text"
                                        name="patientVisitReason"
                                        value={formData.patientVisitReason}
                                        onChange={handleChange}
                                        placeholder="Reason for Visit"
                                        required
                                        className="form-control"
                                    />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                    <Form.Label>Section 0: Patient Information</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientMedicalRecord"
                                        value={formData.patientMedicalRecord}
                                        onChange={handleChange}
                                        placeholder="Patient Medical Number (if applicable)"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientName"
                                        value={formData.patientName}
                                        onChange={handleChange}
                                        placeholder="Patient Name"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Text className="text-muted"> Patient Date of Birth</Form.Text>
                                    <Form.Control
                                        type="date"
                                        name="patientDateofBirth"
                                        value={formData.patientDateofBirth}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientGender"
                                        value={formData.patientGender}
                                        onChange={handleChange}
                                        placeholder="Patient Gender"
                                        required
                                        className="form-control"
                                    />
                                      <Form.Control
                                        type="text"
                                        name="patientRace"
                                        value={formData.patientRace}
                                        onChange={handleChange}
                                        placeholder="Patient Race"
                                        required
                                        className="form-control"
                                    />

                                    <Form.Control
                                        type="text"
                                        name="patientPH"
                                        value={formData.patientPH}
                                        onChange={handleChange}
                                        placeholder="Patient Phone Number"
                                        required
                                        className="form-control"
                                        />
                                    <Form.Control
                                        type="text"
                                        name="patientDiscord"
                                        value={formData.patientDiscord}
                                        onChange={handleChange}
                                        placeholder="Patient Email Address ((& Discord))"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientEmergencyContact"
                                        value={formData.patientEmergencyContact}
                                        onChange={handleChange}
                                        placeholder="Patient Emergency Contact Name"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientEmergencyContactNumber"
                                        value={formData.patientEmergencyContactNumber}
                                        onChange={handleChange}
                                        placeholder="Patient Emergency Contact Phone Number"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientEmergencyContactRelation"
                                        value={formData.patientEmergencyContactRelation}
                                        onChange={handleChange}
                                        placeholder="Patient Emergency Contact Relation"
                                        required
                                        className="form-control"
                                    />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                    <Form.Label>Section 1: Medical History</Form.Label>
                                    <Form.Control
                                        type="textarea"
                                        name="patientMedicalHistory"
                                        value={formData.patientMedicalHistory}
                                        onChange={handleChange}
                                        placeholder="Patient Medical History"
                                        rows="3"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientSurgicalHistory"
                                        value={formData.patientSurgicalHistory}
                                        onChange={handleChange}
                                        placeholder="Patient Surgical History"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientMedicine"
                                        value={formData.patientMedicine}
                                        onChange={handleChange}
                                        placeholder="Patient Current Medication"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientCurrentMedicine"
                                        value={formData.patientCurrentMedicine}
                                        onChange={handleChange}
                                        placeholder="Patient Medication History"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientAllergies"
                                        value={formData.patientAllergies}
                                        onChange={handleChange}
                                        placeholder="Patient Allergies"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientMedicalFile"
                                        value={formData.patientMedicalFile}
                                        onChange={handleChange}
                                        placeholder="Patient Medical File Link"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientEvalFile"
                                        value={formData.patientEvalFile}
                                        onChange={handleChange}
                                        placeholder="Patient Evaluation File Link"
                                        required
                                        className="form-control"
                                    />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                    <Form.Label>Section 2: Psychatric History</Form.Label>
                                    <Form.Select 
                                            name="violenceHistory"
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setFormData(prev => ({
                                                    ...prev,
                                                    violenceToSelf: value === 'self' || value === 'both',
                                                    violenceToOthers: value === 'others' || value === 'both'
                                                }));
                                            }}
                                        >
                                            <option value="none">None</option>
                                            <option value="self">Self</option>
                                            <option value="others">Others</option>
                                            <option value="both">Both</option>
                                        </Form.Select>
                                        <Form.Select 
                                            name="RiskFactor"
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setFormData(prev => ({
                                                    ...prev,
                                                    noRisk: value === 'noRisk',
                                                    LowRisk: value === 'LowRisk',
                                                    MediumRisk: value === 'MediumRisk',
                                                    HighRisk: value === 'HighRisk'
                                                }));
                                            }}
                                        >
                                            <option value="..."> Risk Factor Scale</option>
                                            <option value="noRisk">No Risk</option>
                                            <option value="LowRisk">Low Risk</option>
                                            <option value="MediumRisk">Medium Risk</option>
                                            <option value="HighRisk">High Risk</option>
                                        </Form.Select>
                                        <Form.Control
                                            type="text"
                                            name="patientTreatment"
                                            value={formData.patientTreatment}
                                            onChange={handleChange}
                                            placeholder="Patient Mental Health Treatment History"
                                            required
                                            className="form-control"
                                            /> 
                                        <Form.Control
                                            type="text"
                                            name="patientTrauma"
                                            value={formData.patientTrauma}
                                            onChange={handleChange}
                                            placeholder="Patient Trauma History"
                                            required
                                            className="form-control"
                                            />
                                        <Form.Control
                                            type="text"
                                            name="patientSubstance"
                                            value={formData.patientSubstance}
                                            onChange={handleChange}
                                            placeholder="Patient Substance Abuse History"
                                            required
                                            className="form-control"
                                            />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                    <Form.Label>Section 3: Psychosocial History</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientJob"
                                        value={formData.patientJob}
                                        onChange={handleChange}
                                        placeholder="Patient Job"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientEdu"
                                        value={formData.patientEdu}
                                        onChange={handleChange}
                                        placeholder="Patient Education"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientDev"
                                        value={formData.patientDev}
                                        onChange={handleChange}
                                        placeholder="Patient Developmental History"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientLegal"
                                        value={formData.patientLegal}
                                        onChange={handleChange}
                                        placeholder="Patient Legal History"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientSpiritual"
                                        value={formData.patientSpiritual}
                                        onChange={handleChange}
                                        placeholder="Patient Spiritual History"
                                        required
                                        className="form-control"
                                    />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                    <Form.Label>Section 4: Diagnosis</Form.Label>
                                    <Form.Control
                                        type="textarea"
                                        name="patientDiagnosis"
                                        value={formData.patientDiagnosis}
                                        onChange={handleChange}
                                        placeholder="Diagnosis"
                                        rows="3"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="textarea"
                                        name="patientNotes"
                                        value={formData.patientNotes}
                                        onChange={handleChange}
                                        placeholder="Any notes of the patient that maybe relevent"
                                        rows="3"
                                        required
                                        className="form-control"
                                    />
                                    </Form.Group>
                              </>
                        ) : bbCodeVersion === 15 ? ( // generateMentalHealthVisitUp
                                                                                    <>
                                       <Form.Label>Employee Credentials:</Form.Label>

            <Select
    name="phmcEmployee"
    value={phmcGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.phmcEmployee) || null}
    onChange={(selectedOption) => {
        handleChange({
            target: {
                name: 'phmcEmployee',
                value: selectedOption?.value || ''
            }
        });
        if (selectedOption) {
            setFormData(prev => ({
                ...prev,
                phmcSignature: selectedOption.signature || ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                phmcSignature: ''
            }));
        }
    }}
    options={phmcGroupedOptions}
    isClearable
    placeholder="Search or select doctor..."
    className="form-control"  // Match Bootstrap styling
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
                                        />     
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phmcSignature"
                                        value={formData.phmcSignature}
                                        onChange={handleChange}
                                        placeholder="Employee Signature"
                                        required
                                    />
                                    <Form.Label>Patient Data: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientMedicalRecord"
                                        value={formData.patientMedicalRecord}
                                        onChange={handleChange}
                                        placeholder="Patient Medical Number (if applicable)"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientName"
                                        value={formData.patientName}
                                        onChange={handleChange}
                                        placeholder="Patient Name"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Group>
                                    <Form.Label>Completion Date: </Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        placeholder="Date of File Change"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="phmcEmployee"
                                        value={formData.phmcEmployee}
                                        onChange={handleChange}
                                        placeholder="Updating Therapist"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientTreatment"
                                        value={formData.patientTreatment}
                                        onChange={handleChange}
                                        placeholder="Treatments/Therapies Performed:"
                                        required
                                        className="form-control"
                                        />

                                    <Form.Control
                                        type="text"
                                        name="patientNotes"
                                        value={formData.patientNotes}
                                        onChange={handleChange}
                                        placeholder="Findings, Observations & Notes"
                                        required
                                        className="form-control"
                                        />
                                    </Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="patientNewMedicine"
                                        value={formData.patientNewMedicine}
                                        onChange={handleChange}
                                        placeholder="Changes to Treatment Plan:"
                                        required
                                        className="form-control"
                                        />

                                    </>
                         ) : bbCodeVersion === 16 ? ( // generateMentalHealthRiskUpdate
                                            <>
                        <Form.Label>Employee Credentials:</Form.Label>

            <Select
    name="phmcEmployee"
    value={phmcGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.phmcEmployee) || null}
    onChange={(selectedOption) => {
        handleChange({
            target: {
                name: 'phmcEmployee',
                value: selectedOption?.value || ''
            }
        });
        if (selectedOption) {
            setFormData(prev => ({
                ...prev,
                phmcSignature: selectedOption.signature || ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                phmcSignature: ''
            }));
        }
    }}
    options={phmcGroupedOptions}
    isClearable
    placeholder="Search or select doctor..."
    className="form-control"  // Match Bootstrap styling
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
                                        />     
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phmcSignature"
                                        value={formData.phmcSignature}
                                        onChange={handleChange}
                                        placeholder="Employee Signature"
                                        required
                                    />

                                    <Form.Group>
                                    <Form.Label>Patient Data: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientMedicalRecord"
                                        value={formData.patientMedicalRecord}
                                        onChange={handleChange}
                                        placeholder="Patient Medical Number (if applicable)"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientName"
                                        value={formData.patientName}
                                        onChange={handleChange}
                                        placeholder="Patient Name"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientNotes"
                                        value={formData.patientNotes}
                                        onChange={handleChange}
                                        placeholder="Observations and Changes Pending:"
                                        required
                                        className="form-control"
                                        />
                                        <Form.Select 
                                            name="RiskFactor"
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setFormData(prev => ({
                                                    ...prev,
                                                    noRisk: value === 'noRisk',
                                                    LowRisk: value === 'LowRisk',
                                                    MediumRisk: value === 'MediumRisk',
                                                    HighRisk: value === 'HighRisk'
                                                }));
                                            }}
                                        >
                                            <option value="..."> Risk Factor Scale</option>
                                            <option value="noRisk">No Risk</option>
                                            <option value="LowRisk">Low Risk</option>
                                            <option value="MediumRisk">Medium Risk</option>
                                            <option value="HighRisk">HighRisk</option>
                                        </Form.Select>
                                    </Form.Group>
                                    </>
                        ) : bbCodeVersion === 17 ? ( // generateMentalHealthNoSession
                                        <>
                <Form.Label>Employee Credentials:</Form.Label>

            <Select
    name="phmcEmployee"
    value={phmcGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.phmcEmployee) || null}
    onChange={(selectedOption) => {
        handleChange({
            target: {
                name: 'phmcEmployee',
                value: selectedOption?.value || ''
            }
        });
        if (selectedOption) {
            setFormData(prev => ({
                ...prev,
                phmcSignature: selectedOption.signature || ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                phmcSignature: ''
            }));
        }
    }}
    options={phmcGroupedOptions}
    isClearable
    placeholder="Search or select doctor..."
    className="form-control"  // Match Bootstrap styling
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
                                        />     
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phmcSignature"
                                        value={formData.phmcSignature}
                                        onChange={handleChange}
                                        placeholder="Employee Signature"
                                        required
                                    />

                                    <Form.Group>
                                    <Form.Label>Patient Data: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="patientMedicalRecord"
                                        value={formData.patientMedicalRecord}
                                        onChange={handleChange}
                                        placeholder="Patient Medical Number (if applicable)"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientName"
                                        value={formData.patientName}
                                        onChange={handleChange}
                                        placeholder="Patient Name"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Label>Update File Date: </Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        placeholder="Date of File Change"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="phmcEmployee"
                                        value={formData.phmcEmployee}
                                        onChange={handleChange}
                                        placeholder="Updating Therapist"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="patientNotes"
                                        value={formData.patientNotes}
                                        onChange={handleChange}
                                        placeholder="Findings, Observations & Notes"
                                        required
                                        className="form-control"
                                        />
                                    </Form.Group>
                                    </>
                                  ) : bbCodeVersion === 18 ? ( // generateAgencyFeedback
                                <>
            <Form.Label>Employee Credentials:</Form.Label>

                                <Select
    name="coronerEmployee"
    value={coronerGroupedOptions
        .flatMap(group => group.options)
        .find(option => option.value === formData.coronerEmployee) || null}
    onChange={(selectedOption) => handleSelectChange(selectedOption, 'coroner')}
    options={coronerGroupedOptions}
    isClearable
    placeholder="Search or select coroner..."
    className="form-control"
  styles={{
        control: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            color: '#eeeeeeb0',
            borderColor: '#6c757d',
            '&:hover': {
                borderColor: '#eeeeeeb0'
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#16202c',
            zIndex: 1000
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? 'Grey' : '#16202c',
            color: '#eeeeeeb0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        input: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#eeeeeeb0'
        }),
        group: (base) => ({
            ...base,
            paddingTop: 8,
            paddingBottom: 8
        }),
        groupHeading: (base) => ({
            ...base,
            color: '#6c757d',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: 4
        })
    }}
    />     
                                    <Form.Label></Form.Label>

                                    <Form.Label>Agency Involved:</Form.Label>
                                    <Form.Select
                                        name="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        required
                                        className="form-select"
                                    >
                                        <option value="" disabled>Select Department</option>
                                        <option value="LSFD">LSFD</option>
                                        <option value="LSPD">LSPD</option>
                                        <option value="LSSD">LSSD</option>
                                        <option value="PHMC">PHMC</option>
                                        <option value="SANFIRE">SANFIRE</option>
                                        <option value="SADCR">SADCR</option>
                                        <option value="LSGOV">LSGOV</option>
                                    </Form.Select>

                                    <Form.Label>Time of Incident:</Form.Label>
                                    <Form.Control
                                        type="datetime-local"
                                        name="dateTime"
                                        value={formData.dateTime}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                    <Form.Label>Brief Summary:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="synopsis"
                                        value={formData.synopsis}
                                        onChange={handleChange}
                                        rows="4"
                                        required
                                        className="form-control"
                                    />
                                    <Form.Label>Incident Location:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="placeOfDeath"
                                        value={formData.placeOfDeath}
                                        onChange={handleChange}
                                        placeholder="Mirror Park"
                                        required
                                        className="form-control"
                                    />
                                 <Form.Control
                                        as="textarea"
                                        name="decedentName"
                                        value={formData.decedentName}
                                        onChange={handleChange}
                                        rows="3"
                                        placeholder="Agency Employee's Names"
                                        required
                                        className="form-control"
                                    />

                                <Form.Group className="mb-3 upload-container">
                                    <Form.Label>
                                        ((Screenshots or Evidence)):
                                    </Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            as="textarea"
                                            name="scenePhotos"
                                            value={formData.scenePhotos}
                                            onChange={handleChange}
                                            rows="2"
                                            required
                                            className="form-control"
                                            onPaste={(e) => {
                                                e.preventDefault();
                                                const items = e.clipboardData.items;
                                                for (let i = 0; i < items.length; i++) {
                                                    if (items[i].type.indexOf('image') !== -1) {
                                                        const file = items[i].getAsFile();
                                                        handleImageUpload({ target: { files: [file] } }, 'scenePhotos');
                                                    }
                                                }
                                            }}

                                        />
                                        <Button
                                            variant="success"
                                            disabled={isUploading}
                                            onClick={() => {
                                                const input = document.createElement('input');
                                                input.type = 'file';
                                                input.accept = 'image/*';
                                                input.multiple = true;
                                                input.onchange = (e) => handleImageUpload(e, 'scenePhotos');
                                                input.click();
                                            }}
                                        >
                                            <i className={`fas ${isUploading ? 'fa-spinner fa-spin' : 'fa-upload'}`}></i>
                                            {isUploading ? 'Uploading...' : 'Upload Images'}
                                        </Button>

                                    </InputGroup>
                                    <span className="helper-text">
                                    This supports clipboard uploading, ctrl + V! | Hosted by ImgBB! - <a href="https://imgbb.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                                    </span>
                                </Form.Group>
                                    </>
  ) : null}

                                <div className="button-group">
                                    <button
                                        type="button"
                                        onClick={clearForm}
                                        className="upload-button"
                                    >
                                        <i className="fas fa-trash-alt"></i>
                                        Clear Form
                                    </button>
                                </div>
                    </form>
                </div>
                <div className="output-container">
                    <div className="image-container">
                        <a href="http://discord.gg/rrzJ4EeHfK" target="_blank" rel="noopener noreferrer">
                            <img src={Feedback}
                                height={350}
                                alt="discord"
                                width={350}
                                className="Center"
                            />
                        </a>
                    </div>
                    {/* <div className="form-type-header">
                        <h3>DEV_TEXT: You are viewing:
                            {bbCodeVersion === 1 ? ' generateDeath - FULLY TESTED' :
                                bbCodeVersion === 2 ? ' generateEmail - FULLY TESTED' :
                                bbCodeVersion === 3 ? ' generateMedConsultIntMedMain - FULLY TESTED' :
                                bbCodeVersion === 4 ? ' generateDental' :
                                bbCodeVersion === 5 ? ' generateSurgicalOps ' :
                                bbCodeVersion === 6 ? ' generatePhysEvalInternalMed ' :
                                bbCodeVersion === 7 ? ' generateMedConsultIntMedReply - FULLY TESTED' :
                                bbCodeVersion === 8 ? ' generateMedConsultEmergencyMedForm - FULLY TESTED' :
                                bbCodeVersion === 9 ? ' generateObsMainFile - FULLY TESTED' :
                                bbCodeVersion === 10 ? `generateObsFollowUp - FULLY TESTED` :
                                bbCodeVersion === 11 ? `generateMedConsultEmergencyMedForm2 - FULLY TESTED` :
                                bbCodeVersion === 12 ? `generateGyneMainFile - FULLY TESTED` :
                                bbCodeVersion === 13 ? `generateGyneFollowUp - FULLY TESTED` :
                                bbCodeVersion === 14 ? 'generateMentalHealthMainFile - FULLY TESTED' :
                                bbCodeVersion === 15 ? 'generateMentalHealthVisit - FULLY TESTED' :
                                bbCodeVersion === 16 ? 'generateMentalHealthRiskUpdate - FULLY TESTED' :
                                bbCodeVersion === 17 ? 'generateMentalHealthRiskUpdate - FULLY TESTED': 


                                ' MISSING TITLE - CHANGE DEV_TEXT'}
                        </h3>
                    </div> */}
<div className="bbcode-section">
<div className={`char-counter ${getBBCodeContent().length > 60000 ? 'char-counter-warning' : ''}`}>
                Character Counter: {getBBCodeContent().length}/60000
                {getBBCodeContent().length > 60000 && (
                    <div className="char-counter-warning-message">
                                    Hi, you found a new warning: Note that PHPBB has a default Character Limit (60000), some forums are different. You may need to split this form up if you encounter issues!
                    </div>
                )}
            </div>

    <div className="button-group">
    <Button
            variant="primary"
            onClick={() => setShowBBCode(!showBBCode)}
            className="toggle-bbcode-button"
            style={{ marginRight: '10px' }}
        >
            <i className={`fas ${showBBCode ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            {showBBCode ? ' Hide BBCode' : ' Show BBCode'}
        </Button>

        {(formData.scenePhotos || formData.additionalImages) && (
            <Button
                variant="primary"
                onClick={() => setShowImages(!showImages)}
                className="toggle-images-button"
            >
                <i className={`fas ${showImages ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                {showImages ? ' Hide Images' : ' Show Images'}
            </Button>
        )}
    </div>
                        {showBBCode && (
                            <>
                                <h2>Generated BBCode</h2>
                                <div className="bbcode-output">
                                    <pre>
                                        {bbCodeVersion === 1 ? generateDeath() :
                                        bbCodeVersion === 2 ? generateEmail() :
                                        bbCodeVersion === 3 ? generateMedConsultIntMedMain() :
                                        bbCodeVersion === 4 ? generateDental() :
                                        bbCodeVersion === 5 ? generateSurgicalOps() :
                                        bbCodeVersion === 6 ? generatePhysEvalInternalMed() :
                                        bbCodeVersion === 7 ? generateMedConsultIntMedReply() :
                                        bbCodeVersion === 8 ? generateMedConsultEmergencyMedForm() :
                                        bbCodeVersion === 9 ? generateObsMainFile() : 
                                        bbCodeVersion === 10 ? generateObsFollowUp() :
                                        bbCodeVersion === 11 ? generateMedConsultEmergencyMedForm2() :
                                        bbCodeVersion === 12 ? generateGyneMainFile() :
                                        bbCodeVersion === 13 ? generateGyneFollowUp() :
                                        bbCodeVersion === 14 ? generateMentalHealthMainFile() :
                                        bbCodeVersion === 15 ? generateMentalHealthVisit() :
                                        bbCodeVersion === 16 ? generateMentalHealthRiskUpdate() :
                                        bbCodeVersion === 17 ? generateMentalHealthNoSession() :
                                        bbCodeVersion === 18 ? generateAgencyFeedback() : 
                                        generatePhysEvalInternalMed()}
                                    </pre>
                                </div>
                            </>
                        )}
                        {showImages && (formData.scenePhotos || formData.additionalImages) && (
                            <>
                                <h2>Uploaded Images</h2>
                                <div className="images-output">
                                    {formData.scenePhotos && (
                                        <>
                                            <h3>Scene Photos</h3>
                                            {formData.scenePhotos.split(',').map((url, index) => (
                                                <img 
                                                    key={`scene-${index}`}
                                                    src={url.trim()}
                                                    style={{
                                                        maxWidth: '100%',
                                                        height: 'auto',
                                                        marginBottom: '10px',
                                                        display: 'block'
                                                    }}
                                                />
                                            ))}
                                        </>
                                    )}

                                    {formData.additionalImages && (
                                        <>
                                            <h3>Morgue, CInjuries and CDNA Photos</h3>
                                            {formData.additionalImages.split(',').map((url, index) => (
                                                <img 
                                                    key={`additional-${index}`}
                                                    src={url.trim()}
                                                    style={{
                                                        maxWidth: '100%',
                                                        height: 'auto',
                                                        marginBottom: '10px',
                                                        display: 'block'
                                                    }}
                                                />
                                            ))}
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                    </div>                    
                    {bbCodeVersion !== 5 && (
                        <>
                            <h1>Generated Title</h1>
                            <div className="title-output">
                                <pre>{generateTitle()}</pre>
                            </div>
                        </>
                    )}

                    {bbCodeVersion === 2 && (
                        <div className="agency-buttons">
                            <h5>Agency Email Methods: </h5>
                            <a
                                href="https://lspd.gta.world/ucp.php?i=pm&mode=compose"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="agency-button"
                            >
                                <img
                                    src={LSPDLogo}
                                    alt="LSPD"
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        margin: '10px 5px',
                                        cursor: 'pointer'
                                    }}
                                />
                            </a>
                            <a
                                href="https://lssd.gta.world/ucp.php?i=pm&mode=compose"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="agency-button"
                            >
                                <img
                                    src={LSSDLogo}
                                    alt="LSSD"
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        margin: '10px 5px',
                                        cursor: 'pointer'
                                    }}
                                />
                            </a>
                            <a
                                href="https://lsfd.gta.world/ucp.php?i=pm&mode=compose"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="agency-button"
                            >
                                <img
                                    src={LSFDLogo}
                                    alt="LSFD"
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        margin: '10px 5px',
                                        cursor: 'pointer'
                                    }}
                                />
                            </a>
                            <a
                                href="https://phmc.gta.world/ucp.php?i=pm&mode=compose"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="agency-button"
                            >
                                <img
                                    src={PHMCLogo}
                                    alt="PHMC"
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        margin: '10px 5px',
                                        cursor: 'pointer'
                                    }}
                                />
                            </a>
                        </div>
                    )}

                    <div className="button-container">
                        <button
                            type="button"
                            className="changelog-button"
                            onClick={() => {
                                const title = generateTitle();
                                navigator.clipboard.writeText(title).then(() => {
                                    showNotification('Title copied to clipboard!', 'check-circle');
                                });
                            }}
                        >
                            <i className="fas fa-copy"></i>
                            Copy Title
                        </button>

                        <button
                            type="button"
                            className="changelog-button"
                            onClick={() => {
                                const bbCode = bbCodeVersion === 1 ? generateDeath() :
                                    bbCodeVersion === 2 ? generateEmail() :
                                    bbCodeVersion === 3 ? generateMedConsultIntMedMain() :
                                    bbCodeVersion === 4 ? generateDental() :
                                    bbCodeVersion === 5 ? generateSurgicalOps() :
                                    bbCodeVersion === 6 ? generatePhysEvalInternalMed() :
                                    bbCodeVersion === 7 ? generateMedConsultIntMedReply() :
                                    bbCodeVersion === 8 ? generateMedConsultEmergencyMedForm() :
                                    bbCodeVersion === 9 ? generateObsMainFile() :
                                    bbCodeVersion === 10 ? generateObsFollowUp() :
                                    bbCodeVersion === 11 ? generateMedConsultEmergencyMedForm2() :
                                    bbCodeVersion === 12 ? generateGyneMainFile() :
                                    bbCodeVersion === 13 ? generateGyneFollowUp() :
                                    bbCodeVersion === 14 ? generateMentalHealthMainFile() :
                                    bbCodeVersion === 15 ? generateMentalHealthVisit() :
                                    bbCodeVersion === 16 ? generateMentalHealthRiskUpdate() :
                                    bbCodeVersion === 17 ? generateMentalHealthNoSession() :
                                    bbCodeVersion === 18 ? generateAgencyFeedback() :
                                                generateSurgicalOps();
                                const currentDateTime = new Date().toLocaleString();
                                const userAgent = navigator.userAgent;
                                const browserName = getBrowserName(userAgent);
                                const { decedentName, coronerEmployee, coronerRank, patientName, decedentOOC, phmcEmployee, requestingOfficer} = formData;
                                const version = bbCodeVersion === 1 ? "Decedent Report" :
                                    bbCodeVersion === 2 ? "Coroner Report" :
                                    bbCodeVersion === 3 ? "Medical Consultation (IM) Main File" :
                                    bbCodeVersion === 4 ? "Dental Report " :
                                    bbCodeVersion === 5 ? "Surgical Report " :
                                    bbCodeVersion === 6 ? "Physical Evaluation (IM)" :
                                    bbCodeVersion === 7 ? "Medical Consultation (IM) - Add File" :
                                    bbCodeVersion === 8 ? "Medical Consultation (EM) - Main File" :
                                    bbCodeVersion === 9 ? "Obstetrics - Main File" :
                                    bbCodeVersion === 10 ? "Obstetrics - Follow Up" :
                                    bbCodeVersion === 11 ? "Medical Consultation (EM) - Add File" :
                                    bbCodeVersion === 12 ? "Gynecology - Main File" :
                                    bbCodeVersion === 13 ? "Gynecology - Follow Up" :
                                    bbCodeVersion === 14 ? "Mental Health - Main File" :
                                    bbCodeVersion === 15 ? "Mental Health - Patient Visit" : 
                                    bbCodeVersion === 16 ? "Mental Health - Updating Risk Status": 
                                    bbCodeVersion === 17 ? "Mental Health - No Session" :
                                    bbCodeVersion === 18 ? "Coroners Agency Incidents" : 
                                                                    "THIS PAGE IS LACKING A TITLE, INFORM FROSTY / ALYSON FROST!";

                                navigator.clipboard.writeText(bbCode).then(() => {
                                    showNotification(`${version} copied!`, 'check-circle');

                                    // Send POST request to Discord Webhook
                                    fetch('https://discord.com/api/webhooks/1322759224756928584/MjtBlJvA-qZSTFNKcQVYTAXPEjpDxxI1GOpQHIm6SZwZtuf106HDZi9-1wTkBx0wJ6L8', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            content: ` ** DEBUG LOGS | TRACE |  gh-pages ${commitInfo.sha} **\n${coronerRank}  ${coronerEmployee} / ${phmcEmployee} has used your website.\nPatient / Decedent Name: ${patientName || decedentName}\nDecdent Name OOC: ${decedentOOC} \nTime: ${currentDateTime}\nForm: ${version}\nRequesting Officer: ${requestingOfficer}`
                                        })                                    
                                    }).catch(error => {
                                        console.error('Error:', error);
                                        fetch('https://discord.com/api/webhooks/1322759224756928584/MjtBlJvA-qZSTFNKcQVYTAXPEjpDxxI1GOpQHIm6SZwZtuf106HDZi9-1wTkBx0wJ6L8', {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                content: `An error occurred in ${version}: ${error.message}\nTimestamp: ${currentDateTime}\nBrowser: ${browserName}\n`
                                            })
                                        });
                                    });
                                });
                            }}
                        >
                            <i className="fas fa-clipboard"></i>
                            Copy {bbCodeVersion === 1 ? "Death Report" :
                                bbCodeVersion === 2 ? "Coroner Report" :
                                bbCodeVersion === 3 ? "Internal Medicine" :
                                bbCodeVersion === 4 ? "Internal Medicine Report" :
                                bbCodeVersion === 5 ? "Surgical Operations Report" :
                                bbCodeVersion === 6 ? "Physical Evaluation Report" :
                                bbCodeVersion === 7 ? "Medical Consultation Report v2" :
                                bbCodeVersion === 8 ? "Emergency Medicine Consultation" :
                                bbCodeVersion === 9 ? "Obs & Gynae Main File" :
                                bbCodeVersion === 10 ? "Obs & Gynae Follow Up" :
                                bbCodeVersion === 11 ? "Emergency Medicine - Add File" :
                                bbCodeVersion === 12 ? "Gynecology Main File" :
                                bbCodeVersion === 13 ? "Gynecology Follow Up" :
                                bbCodeVersion === 14 ? "Mental Health Patient File" : 
                                bbCodeVersion === 15 ? `Mental Health - Recorded Visit/Session` :
                                bbCodeVersion === 16 ? `Mental Health - Update Risk Status` : 
                                bbCodeVersion === 17 ? `Mental Health - Update Patient File` :
                                bbCodeVersion === 18 ? 'Coroner Agency Incidents' :
                                                            "DEBUG - update title logic"}
                        </button>
                                                    {(bbCodeVersion !== 1 && bbCodeVersion !== 2 && bbCodeVersion !== 18) && (
                            <div className="button-group">
                                    <Button
                                        variant="secondary"
                                        onClick={() => {
                                            if (!formData.patientName && !formData.patientMedicalRecord) {
                                                showNotification("Please fill in the Patient Name or Patient Medical Number");
                                                return;
                                            }
                                            window.open(`https://phmc.gta.world/search.php?keywords=${formData.patientMedicalRecord}+${formData.patientName}&terms=all&author=&sc=1&sf=all&sr=posts&sk=t&sd=d&st=0&ch=300&t=0&submit=Search`, '_blank')
                                        }}
                                        className="search-button"
                                    >
                                        <i className="fas fa-search"></i>
                                        Search Patient Medical Record
                                    </Button>                            </div>
                            )}                

                    </div>


                    {bbCodeVersion === 1 && (
                        <div className="image-container">
                            <a href="https://phmc.gta.world/posting.php?mode=post&f=267" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={Paperwork}
                                    height={350}
                                    width={350}
                                    className="Center"
                                    alt="Death Reports Link"
                                />
                            </a>
                        </div>
                    )}
                    </div>
            </div>
        </div>
    );
}

export default App;
