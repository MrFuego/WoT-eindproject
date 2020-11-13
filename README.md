# WoT-eindproject

## Wat ga ik maken:
Een responsive web-app voor het beheren van foto's om deze te kunnen weergeven op fotoframes.

## Kort synopsis over hoe de app werkt:
### Foto frame gedeelte van de app:
Bij de eerste launch wordt er een unieke ID gegenereerd en opgeslagen in een tekst bestand.
Deze ID wordt dan weergegeven op het scherm samen met een QR code en web adres naar de applicatie. Er staat ook wat korte info bij. Eens de ID is geregistreerd wordt ook de userID van de gelinkte gebruiker opgeslagen in het text bestand.
*QR code kan eventueel de link naar de site + de unieke ID bevatten voor gebruiksgemak*

### Web gedeelte van de app
Eerst moet je een account registreren, na registratie kun je inloggen. Eens je bent ingelogd kun je een device toevoegen met de unieke ID die gegenereerd werd op het frame. Je kunt het frame dan een naam geven voor gebruiksgemak. Je kunt vervolgens foto’s toevoegen in albums, en deze albums kun je linken aan een frame.


## Features:
 
### Een niet geregistreerde gebruiker kan
- zelf NIETS uploaden
- zich registreren
- een password recovery aanvragen
 
### Een geregistreerde gebruiker kan
- zich inloggen
- afbeeldingen toevoegen
- devices toevoegen
- devices verwijderen
- zijn username, en andere credentials wijzigen
- afbeeldingen toevoegen aan een fotoframe
- afbeeldingen verwijderen gelinkt aan een fotoframe
#### Uitbreiding:
- Kan vrienden toevoegen

 
### Technologieën:
- Web app geschreven in ReactJS
- Google firestore/firebase voor databeheer
- raspberry pi om de app uit te lezen
- QR code generator API
 
*Uitbreidingen steeds mogelijk als er nog dingen in mij opkomen*
 
### Feature development:
1) **Setup van project + Login/ Registratie -> 30/10**  
*Zorgen dat er geregistreerd kan worden, na registratie moet er ingelogd kunnen worden, en password reset moet weergegeven worden*  
2) **Wireframes + designs -> 13/11**  
*De wireframes + designs van de webapp en het foto-frame moeten klaar zijn*  
3) **UI van webapp afwerken (niet volledig functioneel) -> 20/11**  
*De UI wordt met ReactJS nagebouwd in code, de links worden ook al werkend gemaakt met React router*  
4) **Frame gedeelte van de app opzetten (ID genereren) -> 27/11**  
*De functionele werking van het foto frame wordt opgezet (genereren van unique ID, (QR code genereren), display tekst toevoegen met simpele instructies)*  
5) **UI van webapp afwerken (niet volledig functioneel) -> 04/12**  
*Verdere afwerking van de UI in ReactJS*  
6) **Uploaden afbeelding naar google firestore -> 11/12**  
*Je moet afbeeldingen kunnen oploaden naar de database*  
7) **Foto album beheer -> 18/12**  
*Je moet afbeeldingen kunnen linken naar een album, en volledig kunnen verwijderen van je account*  
8) **Extra features toevoegen -> ...**  
*Mogelijks komen er nog extra features bij*  
