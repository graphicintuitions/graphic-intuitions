---
templateKey: blog-post
title: "WannaCry Ransomware Virus"
featured_image: /img/despaired-2261021_640.jpg
date: 2017-05-16
tags:
  - "News"
  - "ransomeware virus"
  - "ransomware"
  - "Tips"
  - "wanacry"
  - "wannacry ransomware virus"
---

You may have seen the news this weekend. Criminal hackers have released a new strain of ransomware that spreads itself automatically across all workstations in a network, causing a global epidemic. If you or a co-worker are not paying attention and accidentally open one of these phishing email attachments, you might infect not only your own workstation, but immediately everyone else's computer too with the WannaCry Ransomware Virus.

&nbsp;

<span style="font-weight: 400;">Be very careful when you get an email with an attachment you did not ask for. If there is a .zip file in the attachment, do not click on it but delete the whole email. Remember: "When in doubt, throw it out!"</span>

&nbsp;

<span style="font-weight: 400;">Hundreds of thousands of machines are infected worldwide, including FedEx Corp, Renault, Nissan, the German Railways, Russian banks, gas stations in China, and Spanish telecommunications firm, Telefonica (which reported 85% of their systems being down as a result of the cyberattack), and Russia seems to have been hit the hardest up to now. (Source: Kaspersky's Securelist) Note: This is just the early days, the spread and damage of this virus could be much worse in days and weeks to come.</span>

&nbsp;

<span style="font-weight: 400;">The strain is called "Wana Decrypt0r" which requests $300 from victims to decrypt their computers. This monster has infected hundreds of thousands of systems in more than 150 countries.</span>

![wannacry ransomware virus](/img/Wannacry-ransomeware.jpg)

### <span style="font-weight: 400;">The Ransom Deadline Is Short</span>

<span style="font-weight: 400;">The ransom starts at $300 for the first 6 hours, and you've got up to 3 days to pay before it doubles to $600. If you don't pay within a week then the ransomware threatens to delete the files altogether. Note, the social engineering aspect here too: a sense of urgency is created to prompt people into action. A sense of hope is granted by virtue of the ability to decrypt a sample selection of the files.</span>

&nbsp;

<span style="font-weight: 400;">The ransomware's name is WCry, but is also referenced online under various names, such as WannaCry, WannaCrypt0r, WannaCrypt, or Wana Decrypt0r. As everybody keeps calling it "Wana Decrypt0r," this is the name we'll use in this article, but all are the same thing, which is version 2.0 of the lowly and unimpressive WCry ransomware that first appeared in March."</span>

<span style="font-weight: 400;">Kaspersky Lab also reports that the Wana strain has numerous languages available and was designed to affect multiple countries.</span>

![Wannacry ransomware virus](/img/Wannacry-ransomeware-2.jpg)

### <span style="font-weight: 400;">What Can Be Done To Stop These Bad Guys?</span>

<span style="font-weight: 400;">It's possible but difficult to stop them. Some bitcoin has reportedly been paid into hackers' accounts and investigators can track the money and see where the bitcoin ends up. "Despite what people tend to think, it's highly traceable," Clifford Neuman, who directs the University of Southern California's Center for Computer Systems Security, told the Washington Post.</span>

<span style="font-weight: 400;">However, hackers are still able to hide and launder the bitcoins in many different ways. Investigators will also examine the code itself as hackers often leave identifiable traces of their work. You can watch as some of these wallets are receiving money in real time. There is an international manhunt underway.</span>

&nbsp;

## **The Technical Stuff**

### <span style="font-weight: 400;">If You Can, Apply This Patch Immediately</span>

<span style="font-weight: 400;">After the initial infection, the malware spreads like a worm via SMB, that is the Server Message Block protocol used by Windows machines to communicate with file systems over a network.</span>

&nbsp;

<span style="font-weight: 400;">According to Cisco's TALOS team:</span>

<span style="font-weight: 400;">The file tasksche.exe checks for disk drives, including network shares and removable storage devices mapped to a letter, such as 'C:/', 'D:/' etc. The malware then checks for files with a file extension as listed in the appendix and encrypts these using 2048-bit RSA encryption. From what we have been able to learn, Wana spreads through SMB so when we're talking about machines behind firewalls being impacted, it implies ports 139 and 445 being open and at-risk hosts listening to inbound connections. It'd only take one machine behind the firewall to become infected to then put all other workstations and servers at risk due to it being a true worm.</span>

&nbsp;

<span style="font-weight: 400;">In the meantime, harden yourselves against this Windows Network Share vulnerability and ensure that all systems are fully patched with the "MS17-010" security update (link below) and remind all staff to Think Before They Click when they receive any out of the ordinary emails.  https://technet.microsoft.com/en-us/library/security/ms17-010.aspx</span>

&nbsp;

### <span style="font-weight: 400;">8 Things To Do To Help Prevent This Virus (apart from having weapons-grade backups)</span>

1.  <span style="font-weight: 400;">     </span><span style="font-weight: 400;">Check your firewall configuration and make sure no criminal network traffic is allowed out, and disable SMBv1 on all machines immediately</span>
2.  <span style="font-weight: 400;">     </span><span style="font-weight: 400;">From here on out with any ransomware infection, wipe the machine and re-image from bare metal</span>
3.  <span style="font-weight: 400;">     </span><span style="font-weight: 400;">If you don't have a Secure Email Gateway (SEG), get one that does URL filtering and make sure it's tuned correctly</span>
4.  <span style="font-weight: 400;">     </span><span style="font-weight: 400;">Make sure your endpoints are patched religiously, OS and 3rd Party Apps</span>
5.  <span style="font-weight: 400;">     </span><span style="font-weight: 400;">Make sure your endpoints and web-gateway have next-gen, frequently updated  (a few hours or shorter) security layers</span>
6.  <span style="font-weight: 400;">     </span><span style="font-weight: 400;">Identify users that handle sensitive information and enforce some form of higher-trust authentication (like 2FA)</span>
7.  <span style="font-weight: 400;">     </span><span style="font-weight: 400;">Review your internal security Policies and Procedures, specifically related to financial transactions to prevent CEO Fraud</span>
8.  <span style="font-weight: 400;">     </span><span style="font-weight: 400;">Deploy new-school security awareness training, which includes simulated social engineering tests via multiple channels, not just email.</span>
&nbsp;

<span style="font-weight: 400;">We can help your company come up with appropriate policies to help protect your information and check if your hardware and procedures are equipped to withstand incoming security threats. For more information contact Dave at 204.746.6177 or </span>[<span style="font-weight: 400;">david@teamgi.ca</span>](mailto:dave@teamgi.ca)<span style="font-weight: 400;">. </span>