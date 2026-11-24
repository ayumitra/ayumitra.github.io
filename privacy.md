Title: Privacy policy · Ayumitra
URL: https://ayumitra.app/privacy.html

[Home](https://ayumitra.app/index.md) Privacy policy

# Privacy policy

Ayumitra keeps your family’s health records on your phone, encrypted. They are never sent to us, unless you email us something yourself or use Ayumitra Pro, the optional subscription. This page explains what that means for the app and for this website.

Last updated: 24 November 2026

## Who is responsible

Kriti Rai

Annenallee 5

12555 Berlin, Germany

Email: [support@ayumitra.app](mailto:support@ayumitra.app)

Full details are in the [Impressum](https://ayumitra.app/impressum.md).

## In short

- Unless you subscribe to Ayumitra Pro, there is no Ayumitra account and no Ayumitra server that receives your health records. We don’t share or sell them.

- With Ayumitra Pro, what you send to the assistant goes through our server to AI models that answer, some of them outside the EU, and is not kept after the answer. The Pro account holds your email address, not your records.

- The app stores everything in an encrypted vault on your phone or tablet, and on a device that can run it, its AI runs there too.

- The app contacts other companies only for what you choose: downloading its AI model, built-in web search if you turn it on, a cloud AI model or web search with your own key, a decision model when a cloud model or Pro answers, looking up a packaged food by its barcode or a US medicine pack by its product number, importing from Health Connect or Apple Health, and health advice for a country you travel to. Each is described below.

- Web searches never include the names of the people in your profiles, dates, ages, readings, email addresses, phone numbers or links: the app checks every search before it is sent and withholds one that has any of these.

- If you share a child’s profile with the other parent, your two phones exchange it directly on your Wi‑Fi. It never reaches us.

- This website sets no cookies, has no analytics and loads nothing from other servers.

## The Ayumitra app

### Your records stay on your phone

Profiles, reports, scans and photos, conversations, measurements, medicines, vaccines, cycle logs, reminders and everything else you add are stored in an encrypted vault on your phone. The key is kept in the phone’s secure storage. We have no copy of the key and no access to the vault.

### The AI runs on your phone

On a phone or tablet that can run it, reading reports and answering questions happens on the device with an on-device model, and works without a connection. On one that can’t, the app keeps working without it, and answers come only from a cloud AI model you turn on (below).

### Downloading the AI model

The first time you set up Ayumitra, it downloads its model files (about 2.6 GB and 165 MB) from Hugging Face, Inc. (USA). Like any download, this shares your phone’s IP address and the request with Hugging Face, which may process it in the USA. No health data, name or other record is sent. The legal basis is Art. 6(1)(b) GDPR: the download is needed for the app to work.

### A cloud AI model, only if you turn it on

Cloud AI is off until you agree to it and turn it on. If you do, you add your own key for OpenAI, Anthropic, Google (the Gemini API) or OpenRouter. Your question, and the parts of your records needed to answer it, are then sent from your phone directly to the provider you chose, under your own account with them and their terms; if you choose to have reports read by the cloud model, photos of their pages are sent too. Unless you turn the privacy shield off, the names of the people in your profiles, and common other spellings of them, are replaced with made-up ones in the text before it is sent. Other names, such as a nickname or a doctor’s, aren’t changed, and names printed on a page’s photo can’t be. You can see the text that was sent. Nothing passes through us. Bringing your own key gives you the choice of provider, and it also means we don’t control how or where that provider transmits, stores or uses what is sent: its terms decide, and it may use what you send as those terms allow. OpenRouter, Inc. (USA) passes each request on to the company that runs the model you picked: for paid models the app asks OpenRouter to use only companies that don’t keep or train on what is sent; a free model may keep it, so the app asks you to agree to each free model separately. If your Google key comes from a project without billing set up (Google’s free tier), Google may also use what is sent to improve its products, and human reviewers may read it; Google says it does not do this when billing is set up. The app tells you this before you agree. These providers may process data in the USA. The legal basis is your explicit consent (Art. 6(1)(a) and Art. 9(2)(a) GDPR). You can withdraw it at any time by turning cloud AI off in the app; nothing more is sent from then on.

### Decision models, when a cloud model or Pro answers

When a cloud model or Ayumitra Pro answers, the app first asks a small decision model about each message you send: whether it may be an emergency, what kind of question it is, which of the app’s tools it needs, and whether it holds something to save in your records. Once an answer is written, it is also asked whether the answer says something is the person’s own, so the app can check that against their records before the answer is shown. The decision model only answers these questions. It writes no answer and no record, and the app’s own checks still run. This is on by default when a cloud model or Pro answers and off when the AI runs on your phone; you can turn it on or off in Settings › Cloud AI › Decision models, and the app tells you before it first sends anything. If you turn it on while the AI runs on your phone, each message you send still goes to the decision model in the cloud.

For each message, the app sends the message, up to three of your messages before it, up to 600 characters of the previous reply, and the age of the person it is about (for example “a child of 6”) with whether they are pregnant. To check an answer, it sends the answer’s sentences that name a condition, a medicine, an allergy or a result. In a memory update, and about once a week on its own, it also checks whether saved health details not mentioned for a month are still current, so each of those details, its dates and the words it was saved from are sent too. What is over is archived on your phone, never deleted: kept out of everyday answers, looked at only when a question about the past searches your records, and you can put any of it back or turn this off (Health memory › Archived). Long-term conditions, medicines still taken, allergies, vaccines and results are never archived, and the weekly check uses only the decision model. With the AI on your phone alone, the AI on your phone does this, and nothing is sent. The privacy shield replaces names as it does for any other request, and you can see what was sent. Without Pro, this goes from your phone to OpenRouter, Inc. (USA) under your own OpenRouter key, even when another provider answers your questions, and OpenRouter passes it on to the company that runs the decision model you chose (by default Perplexity AI, Inc., USA). With Pro, it goes through our server to OpenRouter in the same way, to a decision model we choose in one of the places listed under [Ayumitra Pro]. Every decision request asks OpenRouter to use only companies that don’t keep or train on what is sent; if none can take it, it is passed on to no one and the app decides without it. Without Pro, these companies may process the data in the USA, or elsewhere for a decision model you add yourself. The legal basis is your explicit consent (Art. 6(1)(a) and Art. 9(2)(a) GDPR). You can withdraw it at any time by turning decision models off; nothing more is sent for decisions from then on.

### Ayumitra Pro, only if you subscribe

Ayumitra Pro is an optional subscription, described in the [terms](https://ayumitra.app/terms.md). Without it, nothing in this section applies.

- **What you send.** The questions, reports and photos you send to the assistant go from your phone through our server to AI models that answer. Pro’s [decision step] also goes through our server. Before anything is sent, the names of the people in your profiles are replaced with made-up ones, as for any cloud request.

- **Where it may go.** Pro sends what you send only to AI models and decision models run by companies that keep nothing after the answer and don’t use it to train AI models (zero data retention). They may run in the EU, the UK, Switzerland, the USA, Canada, Japan, Singapore, India or Australia. At present, reports and photos are read by a model hosted by our cloud provider in the EU. Questions go through OpenRouter, Inc. (USA) to models run by companies that keep nothing after the answer: OpenAI’s GPT-6 Luna, run by Microsoft Azure, answers most of them, and Z.ai’s GLM and DeepSeek’s models answer harder ones; another of these, or MiniMax’s model, answers when one can’t. Decisions are made by Perplexity AI, Inc. in the USA, through OpenRouter. Web search is separate (below).

- **The Pro account.** It holds your email address, your plan and its state, and this month’s counts of requests and web searches. It holds no health records and nothing about the people in your profiles. Every phone or tablet signed in to the account has a sign-in session on our server, kept only as a one-way fingerprint.

- **Web search with Brave, only if you turn it on.** It is off until you turn it on, in the Pro agreement or in Settings › Looking things up. While it is off, nothing is searched while Pro answers, not even with a key of your own: answers use what the AI knows and the health library on your phone. When it is on, Pro looks things up through our server with Brave Search (Brave Software, Inc., USA). Only the search words are sent. The AI proposes the search words (for a medicine you look up, its name as you typed it), and the app checks each search before it is sent: a search with the name of anyone in your profiles, however it is spelt, a date, an age, a reading or another number about a person, an email address, a phone number or a link is not sent. Brave receives the search from our server, so it doesn’t see your IP address, and our server doesn’t keep it. Under its privacy notice, Brave keeps a record of searches for up to 90 days for billing, troubleshooting and preventing abuse, and says it cannot tell which person made a search. We have asked Brave for zero data retention for Pro’s searches; until we have it, this record applies. The legal basis is your consent (Art. 6(1)(a) GDPR), given by turning it on and recorded on your phone; turning web search off withdraws it.

- **Signing in.** You sign in with your email address and a 6-digit code. The email with the code is sent through our mail provider, Proton AG (Switzerland), which receives your address and the code.

- **Where the server runs.** At Amazon Web Services in Frankfurt, Germany (Amazon Web Services EMEA SARL, Luxembourg).

- **Paying.** Apple or Google sells the subscription and takes the payment, under their own privacy policies. The store tells us which plan you have, whether it is running, and when it renews or ends. We don’t receive your payment details.

- **A free month we give you.** If you asked us for Ayumitra Pro, for example by joining a waiting list, we may give your email address a free month. For that we keep the address on our server together with where we got it from (for example “waiting list”). If you never sign in, both are deleted 90 days after the free month ends. Nothing is charged, and the month ends by itself.

- **How long.** The account and its counts of requests are kept until you delete it. Server logs are kept for 14 days; they hold no email address, question or answer. If you delete the account after using the free trial or Pro this month, or while a subscription is still running, we keep a scrambled marker of the email address with its counts of use (numbers only) for 400 days, so the same address finds its subscription again and gets no second free trial and no fresh allowance. The marker is a one-way fingerprint; the address itself is not in it.

The legal basis is Art. 6(1)(b) GDPR for the account and the service you subscribed to, and your explicit consent (Art. 9(2)(a) GDPR) for the health details in what you send, which the app asks for before Pro answers. What goes outside the EU goes there on your explicit consent to that transfer (Art. 49(1)(a) GDPR), which the app also asks for before Pro answers. The UK, Switzerland, Canada and Japan have an EU adequacy decision; in the other places, the law may not protect your data as EU law does. The marker left after deletion rests on our legitimate interest in preventing misuse of the free trial (Art. 6(1)(f) GDPR).

You can delete the Pro account in the app (Settings › Ayumitra Pro › Delete Pro account) or on the [delete page](https://ayumitra.app/delete-account.md). That removes your email address, the plan record and its counts from our server; only the marker described above may stay. It does not cancel a subscription that is running: cancel that in the App Store or Google Play.

### Barcodes of packaged food, only when you scan one

In the food log you can add a packaged food by its barcode, scanned with the camera or typed in. When web search is on (Settings › Looking things up) and you do, the app sends that barcode number from your phone to Open Food Facts (Open Food Facts, a non-profit association in France), the open database of food products, to fetch the product's name and the figures on its label. The request carries only the barcode and the app's name, as Open Food Facts asks of apps; nothing about you is sent, and nothing passes through us. The camera reads the barcode on the phone; no picture is sent. Open Food Facts receives your IP address and the barcode, under its own privacy policy. The legal basis is your consent (Art. 6(1)(a) GDPR), given by turning web search on; the app looks a barcode up only when you scan or type one.

### Medicine packs, only when you scan one

In Medicines and the medicine cabinet you can add a medicine by scanning the code on its pack, or by typing the number under the barcode. The camera reads the code on the phone; no picture is sent. The expiry date and the batch that the square code holds are read on the phone and never sent. When web search is on (Settings › Looking things up) and the pack is from the USA, the app sends only the pack’s product number (its National Drug Code) from your phone to openFDA, the U.S. Food and Drug Administration’s open list of medicines (USA), to fetch the medicine’s name, strength and form; nothing about you is sent, and nothing passes through us. openFDA receives your IP address and that number, under its own terms. For packs from other countries no list is asked: you take a photo of the pack or type its name. The legal basis is your consent (Art. 6(1)(a) GDPR), given by turning web search on; the app looks a pack up only when you scan or type one.

### Google's reports on Android

On Android, two parts of the app come from Google: ML Kit, which reads barcodes on the phone, and the Google Play Billing Library, used to buy Ayumitra Pro. While they run, they send Google reports on how they work, such as the device's make, model and system version, the app's version, an identifier for this installation and how long a scan took or which error occurred. Google says the ML Kit identifier is not meant to identify you or your device, and its list of what ML Kit sends names no pictures and no barcodes. Neither part sends anything about your health, and nothing passes through us. Google uses these reports to run and improve its components, under its own privacy policy. The legal basis is our legitimate interest in a barcode reader and purchases that work (Art. 6(1)(f) GDPR). The app for iPhone and iPad has neither part: Apple's own reader reads barcodes there, and purchases go through the App Store.

### Built-in web search, only if you turn it on

Built-in search is off until you turn it on, during set-up or in Settings › Looking things up. When it is on and no search key is saved, or you pick built-in search, the app can look up general public information, such as what a test measures, without any key: it sends the search words from your phone directly to MedlinePlus, run by the U.S. National Library of Medicine (USA), and to Wikipedia, run by the Wikimedia Foundation, Inc. (USA). Nothing passes through us. The AI proposes the search words (for a medicine you look up, its name as you typed it), and the app checks each search before it is sent: a search with the name of anyone in your profiles, however it is spelt, a date, an age, a reading or another number about a person, an email address, a phone number or a link is not sent. Both services receive your IP address and the search words, under their own privacy policies. The legal basis is your consent (Art. 6(1)(a) GDPR, and Art. 9(2)(a) GDPR where a search could reveal something about health), given by turning it on; the app keeps the time you did. Adding a search key (below) also turns web search on. Turn it off to stop; nothing more is sent from then on.

### Web search with your own key

If you add a key for Brave Search or Tavily, the app can look up general public information, such as a medicine’s label or a guideline, with that service: Brave Software, Inc. (USA), or AlphaAI Technologies Inc., doing business as Tavily (USA). With both keys saved, each search goes to the one you picked, never to both. The AI proposes the search words (for a medicine you look up, its name as you typed it), and the app checks each search before it is sent: a search with the name of anyone in your profiles, however it is spelt, a date, an age, a reading or another number about a person, an email address, a phone number or a link is not sent. The service receives your IP address and the search words; Tavily says it may keep the questions it receives and use them to improve its service. The legal basis is your consent (Art. 6(1)(a) GDPR, and Art. 9(2)(a) GDPR where a search could reveal something about health), given by adding the key. Removing the key stops searches with that service; while web search is on, built-in search answers instead. To stop all searching, turn web search off in Settings › Looking things up.

### Health Connect and Apple Health

Only when you tap Import and allow it, the app reads the last 30 days of weight, height, blood pressure, oxygen, temperature, heart rate, resting heart rate, blood sugar, daily steps and sleep from Health Connect (Android) or Apple Health (iPhone and iPad) into the profile you choose, on the device. Each reading keeps the name of the app that recorded it.

If you leave “Keep checking for new readings” on, the app then reads new readings into that profile by itself while it is open. On Android, if you also allow Health Connect’s reading in the background, it checks about once an hour while it is closed; this is a separate permission you can withdraw in Health Connect at any time. Turning Keep checking off, deleting that profile or deleting everything stops it.

It is read only: nothing is written back to Health Connect or Apple Health. What is read stays in the encrypted vault on the phone and goes to a cloud model only if you have turned cloud AI on.

### Travelling abroad, only if you turn it on

When you turn on Travelling for a country, when you change the country, when you open Travelling a day or more after the last check, and when you tap Check again, the app downloads the World Health Organization’s list of disease outbreak news (WHO, Switzerland) and the U.S. Centers for Disease Control and Prevention’s travel page for that country (CDC, USA). Like any download, this shares your phone’s IP address and the request with them; the CDC address names the country. Nothing about your family is sent. The legal basis is Art. 6(1)(b) GDPR: the download is needed for the feature you turned on. Turn Travelling off to stop.

### Sharing a child’s profile, only if you set it up

You can share a child’s profile with one other person you live with, usually the other parent, after you both agree on your phones with a one-time code. The child’s record (reports, measurements, medicines, vaccines, appointments, reminders and health memory, with who added each item) then goes directly between your two phones on the same Wi‑Fi or one phone’s hotspot, encrypted. It never passes through us or any cloud service. Your chats, settings, keys and other profiles stay on your own phone. What has reached the other phone stays there even if you stop sharing, and either of you can stop managing the profile at any time.

### Backups

Backups are encrypted with a six-word passphrase that only you have. For now, the app saves them only to a folder on your device that you choose, never to iCloud Drive or another cloud drive. A backup kept on the device is lost if the device is lost or reset. Without your six words nobody can open a backup, including us.

### Exports, sharing and emails you send

When you export or share a file, it goes only where you choose, and the file itself isn’t encrypted. If you send text to ChatGPT, Claude, Gemini, WhatsApp or another app, for example to ask for a second opinion, the app opens that app with the text you reviewed, and that company’s own terms apply. Opening an appointment’s address hands the address to Apple Maps or Google Maps. If you report an answer or send feedback from the app, it opens your own email app with a draft to [appfeedback@ayumitra.app](mailto:appfeedback@ayumitra.app) that you can read and change before you send it; a feedback draft carries only the app’s version and whether it is Android, iPhone or iPad. The app may ask you to rate it. What it counts to choose a calm moment (the days it was opened and how often it worked for you) stays on your phone and is never sent; choosing to rate opens Google Play, or Apple’s own rating sheet on iPhone and iPad, under their terms.

### Permissions

The app asks for each permission only when you use the feature that needs it: the camera and photos to add reports, the microphone for voice input (speech is recognised on the phone), notifications for reminders (on the lock screen they say only that you have a health reminder, unless you turn on “Show what a reminder is about” in Settings › Reminders), health data for imports, and the local network to share a child’s profile with the other parent’s phone. Call buttons open your phone’s own dialler.

### No tracking

The app has no advertising, no analytics, no crash reporting and no tracking code from other companies.

### Children

A child’s profile is created and managed by a parent or carer on their own phone, and stays on that phone unless they share it with the other parent’s phone (see above).

### Deleting your data

You can delete a report, a conversation, a profile or everything from within the app. Uninstalling the app removes its data from the phone. Backups you made stay where you saved them until you delete them. A Ayumitra Pro account is deleted separately, in the app or on the [delete page](https://ayumitra.app/delete-account.md).

## This website

### Hosting and server logs

This website is hosted on GitHub Pages by GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. When you visit, GitHub logs your IP address and stores it for security purposes, along with the usual details of a request (the page and the time), under the [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). This is needed to deliver the site and keep it secure (Art. 6(1)(f) GDPR, our legitimate interest in a working, secure website). GitHub may process it in the USA; for transfers out of the EEA it relies on the EU–U.S. Data Privacy Framework and the EU’s standard contractual clauses. We don’t receive these logs.

### No cookies, no analytics, nothing from other servers

The site stores nothing on your device and reads nothing from it, so no consent banner is needed. Fonts and images are served from this site, not loaded from elsewhere.

### Email

If you email us, we use your address and message to reply (Art. 6(1)(b) GDPR when it concerns the app you use, otherwise Art. 6(1)(f)). A reported answer contains the answer’s text and may say something about someone’s health: we use it only to look into the report, with the explicit consent you give by sending it (Art. 9(2)(a) GDPR). We delete messages when they are no longer needed, unless the law requires us to keep them.

### Contact form

The [contact form](https://ayumitra.app/contact.md) sends your name, your email address, the subject and your message, and a company name and phone number if you give them. They go through our server (Amazon Web Services, Frankfurt, Germany) and our mail provider Proton AG (Switzerland) to our support mailbox. The server keeps none of it. It keeps only a count per network address for two days, as a one-way fingerprint, to stop spam. We use what you send to answer your request (Art. 6(1)(b) GDPR when it is about a contract or a step towards one, otherwise Art. 6(1)(f), our legitimate interest in answering). The message stays in the mailbox as long as we need it to answer, then we delete it.

### App stores

The download links take you to Apple’s App Store or Google Play. Their own privacy policies apply there.

## Your rights

Under the GDPR you have the right to access (Art. 15), correction (Art. 16), deletion (Art. 17), restriction (Art. 18), data portability (Art. 20) and to object (Art. 21), and to withdraw consent at any time (Art. 7(3)). Write to us at [support@ayumitra.app](mailto:support@ayumitra.app).

Because your health records exist only on your phone, you see, correct, export and delete them yourself in the app. We can’t do it for you, because we don’t hold them. What a Pro account holds is listed under [Ayumitra Pro].

You can also complain to a data protection authority, for example the one responsible for us: Berliner Beauftragte für Datenschutz und Informationsfreiheit, Alt-Moabit 59–61, 10555 Berlin, Germany.

## Changes

If the app or this website starts handling data differently, this page is updated first, with a new date above.
