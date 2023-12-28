---
title: 'Toward anti-racist technical terminology'
date: '2020-09-24'
author: 'Rebecca Koeser'
---
In the [ACH statement on Black Lives Matter](/news/2020/06/ach-statement-on-black-lives-matter-structural-racism-and-our-organization/), the Association for Computers and the Humanities affirmed our commitment “to our DH being a force for racial and other social justice both within and beyond academia.” As one of many specific actions, we offer this guide to help DH centers, labs, developers, and other technologists be mindful of racially-charged technical terminology embedded in the tools they use, and provide specific resources for using different terms.

For years, scholars have pointed out problems in our approach to the study of race and technology. In 2011, Moya Bailey challenged us “to address the complexities of globalization, colonization, and the alienated labor of people of color in the production of technology that advances digital scholarship practices” that does not benefit them. In 2012 Tara McPherson critiqued “covert racism and its rhetoric of color blindness” systemic in technology and asserted that “work in the digital humanities also proceeded as if technologies from XML to databases were neutral tools.” More recent work from Safiya Noble, Ruha Benjamin, and others call our attention to the glaring inequalities and oppression in our technologies. We know that language matters, and we choose to use equitable, anti-racist terms in our work, whether we are scholars writing about the technologies and tools used for digital scholarship, or developers using the command line to save and share code.

As a collaborative living document, ACH will continue to update the terms over time. We encourage readers to reach out with terms to add to the document, give us feedback, or contribute to our [open bibliography](https://www.zotero.org/groups/2554430/ach_inclusive_technology). Please reach out to Rebecca Sutton Koeser ([rebecca.s.koeser@princeton.edu](mailto:rebecca.s.koeser@princeton.edu) or [@suttonkoeser on Twitter](https://twitter.com/suttonkoeser)) or [secretary@ach.org](mailto:secretary@ach.org) with your suggestions and contributions.

## Slave/Master

“Master” is used widely in current academic and technological language — from attaining a set of technical skills (“mastery”), to pursuing post-baccalaureate education (master’s degree), to differentiating between canonical data and copies, or piece of original code and its derivations in the version control systems, or for coordinating processes or devices where one system manages the others. The racially charged language of “master/slave” is based on the history of enslavement, and using this terminology is hurtful and exclusionary.

### Practical steps

#### Git

The recently released [version 2.28 of the git](https://github.blog/2020-07-27-highlights-from-git-2-28/) distributed control system makes the default branch configurable, instead of hard-coding to master when creating new repositories. You can set a new default name for future repositories like this:

1. Upgrade git to version 2.28
2. Configure your preferred default branch name, e.g.:   
`git config --global init.defaultBranch main`

#### GitHub

The popular platform for collaboration and sharing software followed the git default naming conventions for branches [until recently](https://www.zdnet.com/article/github-to-replace-master-with-alternative-term-to-avoid-slavery-references/). They have a [renaming guide](https://github.com/github/renaming) documenting the challenges and support for people who want to switch now, noting that “main” is the most popular alternative. If you have projects with a large number of open pull requests, draft releases, or branch protection policies you may want to wait until Github implements changes to make the transition much more seamless later this year. If you don’t want to wait, here are some options:

- Follow the steps in this [how-to for replacing master with main on GitHub](https://dev.to/afrodevgirl/replacing-master-with-main-in-github-2fjf) by Alexis Moody (command line + GitHub settings configuration)
- If you have a lot of repositories to update, we recommend [github-default-branch](https://github.com/mheap/github-default-branch). Follow the directions for installation, creating an access token, and running the script on all repositories in an organization or individual repositories.

#### GitLab, BitBucket, etc

Use the same approach in the [how-to for replacing master with main on GitHub](https://dev.to/afrodevgirl/replacing-master-with-main-in-github-2fjf) by Alexis Moody, updating your default branch in the appropriate settings.

#### Language

Choose alternate terms. In the context of version control, common alternatives are main and primary; for servers, host/client; for data, consider using primary or canonical.

### Want to learn more? 

For more information, read this recent [twitter thread by Mislav Marohnić](https://twitter.com/mislav/status/1270388510684598272?s=20) on the use of “master” in technology, including a reference to the source of the naming convention in git. This [CNN article on every-day words and phrases that are racist](https://www.cnn.com/2020/07/06/us/racism-words-phrases-slavery-trnd/index.html) includes a brief section on technology with links and dates for when three major platforms and programming languages (Drupal, Django, and Python) replaced this terminology. For a different consideration of the term, you may be interested in [Shaun Morris’ essay on possibilities around changing the Scrum Master title](https://medium.com/@shaundmorris/to-change-scrum-master-or-not-to-change-scrum-master-that-is-the-question-8b503cd43e89).

## Whitelist/Blacklist

These terms have been used to designate access. A “blacklist” is a list of people who are not allowed access. A whitelist is a list where only those on the list can have access. The former is used to deny access in an open system while the latter is used to allow access in a closed system. The terms reproduce the racialized logic of segregation into computing. We’re not aware of any systems or software that currently use these terms in their configurations, but it’s still unfortunately common language when describing security configuration.

### Practical steps

#### Language

Choose alternate terms for describing access to servers and other technology systems. Options include: “allow list” and “deny list”; “block” and “allow. Together, we can work together to remove the terms from DH discourse as well as other spheres such [as discussions about predatory publishing](https://jmla.pitt.edu/ojs/jmla/article/view/490/744).

### Want to learn more?

For more information, read [a discussion of alternate terms on English Language &amp; Usage Stack Exchange](https://english.stackexchange.com/questions/51088/alternative-term-to-blacklist-and-whitelist) as well as changes by government agencies such as [the UK’s National Cyber Security Center](https://www.ncsc.gov.uk/blog-post/terminology-its-not-black-and-white) and the [US National Institute of Standards and Technology](https://www.politico.com/news/2020/06/25/agency-ends-use-technology-terms-racist-associations-339880) and [multinational corporations such as Apple](https://www.pcmag.com/news/apple-to-remove-masterslave-and-blacklist-terms-from-coding-platforms).

## Grandfathered

This term is used for technology, infrastructure, or policies that are exempt from new rules or processes, but refers to a legal clause from the Reconstruction Era used to disenfranchise Black Americans and exclude individuals from voting in the late 19th century.

### Practical steps

#### Language

Replace with “legacy”: legacy project, policy, infrastructure, etc.

### Want to learn more?

For a brief primer, read the [Encyclopedia Britannica entry on “grandfather clause”](https://www.britannica.com/topic/grandfather-clause); for more detail, check out this [NPR Code Switch article on the racial history of the grandfather clause](https://www.npr.org/sections/codeswitch/2013/10/21/239081586/the-racial-history-of-the-grandfather-clause) from 2013. Twitter Engineering included this term on their [list of non-inclusive words and phrases](https://twitter.com/TwitterEng/status/1278733305190342656?s=20) they are replacing with more inclusive language.

## Black hat hacker/White hat hacker

There is some thinking that this terminology has its origins in cinema, in particular in American films depicting cowboys and gunfighters in the American West during the latter half of the 19th century. In these movies, the heroes—such as sheriffs and similar people of the law—wore white hats, while the villains—typically outlaws—wore black hats and dark clothing. In this schema, “white” represents the rule of law, while “black” represents the absence of law, or following one’s own laws. Similarly, there are “white hat hackers” who code for good, often protectively, within the law, and with the permission of system owners. “Black hat hackers,” on the other hand, hack or code illegally for bad, especially through the creation of malware that causes breaches in security and privacy. Although the words “black” and “white” in this usage aren’t understood as racist, it still promotes a color binary that could be construed as racist and obfuscates what is really at stake, which is ethical practices in coding.

### Practical steps

#### Language

Since the distinguishing factor in these terms is the presence or absence of ethics and legality, it is clearer to use expressions like “ethical hacker” and “unethical hacker,” or perhaps “legal hacker” and “illegal hacker.”

### Want to learn more?

For a discussion about black hats and white hats in cinema, see Sarah Laskow’s 2017 Atlas Obscura post, “[The Counterintuitive History of Black Hats, White Hats, and Villains](https://www.atlasobscura.com/articles/the-counterintuitive-history-of-black-hats-white-hats-and-villains).” This [excerpt from *Ninja Hacking*](https://books.google.com/books?id=aVnA8pQmS54C&pg=PA26#v=onepage&q&f=false) offers an extended explanation of the difference between these terms. A more recent piece [describes the information security community’s attempt to untangle these expressions](https://www.digitaltrends.com/news/infosec-black-hat-terminology-racism/). These adjectives also distinguish between ethical and unethical Search Engine Optimization.

---

The resources cited here and many more are included in our [open bibliography](https://www.zotero.org/groups/2554430/ach_inclusive_technology). If you know of relevant content we are missing, we encourage you to tell us or contribute it yourself.

This document was created by ACH Executive Council members and liaison volunteers.

## Contributors

- Patricia Hswe
- Pamella Lach
- Rebecca Sutton Koeser
- Caitlin Pollock
- Rachel Starry
- Lauren Tilton
- Amanda Visconti
- Brandon Walsh