<script setup>

</script>

<template>
<div class="allcv">
    <div class="head">
        <br>
        <img src="@/assets/img/Developpeur.jpg" alt="Photo de profil" id="profil">
        <span>CHARLES DELESSARD</span>
        <h1>Developpeur web junior</h1>
    </div>
    <address>
        <a href="https://www.google.fr/maps/place/15+Rue+des+Fleurs,+73190+Challes-les-Eaux/@45.5505071,5.9746585,15z/data=!3m1!4b1!4m5!3m4!1s0x478baee68f514235:0xfc493b7bce12b3ec!8m2!3d45.5504925!4d5.9849368?entry=ttu" style="color:white">15 Rue des fleurs <br>73190 Challes-les-Eaux</a>
        <a href="mailto:devdelessard@gmail.com" style="color:white">devdelessard@gmail.com</a>
        <a href="tel:0606060606" style="color:white">0606060606</a>
    </address>
    <main>
        <section id="Section1">
            <div class="textY">
                <h2>A propos</h2>
                    <p id="p2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt doloribus voluptatum alias delectus, incidunt veritatis, quaerat amet autem quae rerum eos unde rem tempore sit quasi pariatur exercitationem atque?</p>
                <h2>Langues parlées</h2>
                <ul>
                    <li>Français - Très bon</li>
                    <li>Anglais - Intermédiaire</li>
                    <li>Espagnol - Débutant</li>
                </ul>
                <h2>Centres d'Interêt</h2>
                <ul>
                    <li>Ski</li>
                    <li>Hockey</li>
                    <li>Jeux-vidéos</li>
                    <li>...</li>
                </ul>
            </div>
        </section>
        <section id="Section2">
            <div class="textX">
                <div class="Exp">
                    <h2>Expériences professionnelles</h2>
                    <h3>Technicien SAV Climatisation - Chauffage et clim du Val Gelon (73)</h3>
                    <p>Du 1/10/2022 au 1/10/2024</p>
                    <ul>
                        <li>Diagnostic & Dépannage de climatisations</li>
                        <li>Diagnostic & Dépannage de Pompes à chaleur </li>
                        <li>Entretien de Climatisations</li>
                        <li>Entretien de Pompes à chaleur</li>
                    </ul>
                    <h3>Chargé d'affaires Chauffage et Climatisation - Oxalli (73)</h3>
                    <p>Du 01/07/2019 au 30/09/2022</p>
                    <ul>
                        <li>Elaboration d'études thermiques et hydrauliques</li>
                        <li>Conception de plans sur Autocad/Plancal</li>
                        <li>Réalisation de devis et dossiers techniques/administratifs</li>
                        <li>Gestion des plannings & Management</li>
                        <li>Négociations et commandes des matériaux, approvisionnement</li>
                        <li>Suivi de chantiers</li>
                    </ul>
                </div>
                <div class="column2">
                    <div class="formations">
                        <h2>Diplômes/Formations</h2>
                        <h3>Formation Developpeur Web</h3>
                        <p>Du 30/01/2024 au 30/01/2025</p>
                        <ul>
                            <li>Centre Européen de formation</li>
                            <li>Programmation front-end & back-end, UX Design, IA, Cybersecurité</li>
                        </ul>
                        <h3>DUT Genie Thermique et Energies</h3>
                        <p>Du 15/09/2016 au 30/06/2018</p>
                        <ul>
                            <li>IUT Cherbourg-Manche</li>
                            <li>Thermodynamique, Mecanique des fluides, Electricité, Physique</li>
                        </ul>
                    </div>
                    <div class="competences">
                        <h2>Compétences</h2>
                        <ul>
                            <li>HTML5 - Expert</li>
                            <li>CSS3 - Intermédiaire</li>
                            <li>GitHub - Débutant</li>
                         </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>  
    <div id="CvFooter">
        <br>
        <div class="logoX">
            <a href="https://www.facebook.com/charles.delessard/" target="_blank"><img src="@/assets/img/logo/facebook.png" alt="logo facebook" id="facebook" height="40" width="40"></a>
            <a href="https://github.com/DevDelessard/Portfolio.git" target="_blank"><img src="@/assets/img/logo/github.png" alt="logo GitHub" id="github" height="40" width="40"></a>
            <a href="https://www.linkedin.com/in/charles-delessard-b16957137?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4L3EvJP0Q0yYw%2ByfLb5nOA%3D%3D" target="_blank"><img src="@/assets/img/logo/linkedin.png" alt="logo Linkedin" id="linkedin" height="40" width="40"></a>
        </div>
        <p id="p1">Dernière mise à jour le 02/03/2024</p>
    </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
    .allcv{
    vertical-align: top;
    font-family: "Urbanist", sans-serif;
    font-style: normal;
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
    font-size: 20px;
    font-weight: 500;
    border-style: solid;
    border-width: 3px;
    border-radius: 25px;
    background-color: #000;
    margin-bottom: 10px;
    margin-top: 180px;
    max-height: 1800px;
    border: 3px solid rgb(255, 94, 0);
}
h1{
    font-family:"Urbanist", sans-serif;
    font-weight: 400;
    font-style: normal;
}
h2 {background-color:#dbc2a4;
    font-family:"Urbanist", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #000;
    padding: 0px 30px 0px 0px;
    text-indent: 20px;
    margin-right: 20px;
    font-weight: 900;
    margin-top: 20px;
    border-radius: 8px;
    border-color: #967328;
    border-left-width: 10px;
    border-bottom-width: 0px;
    border-top-width: 0px;
    border-right-width: 0px;
    border-style: solid;
    font-size: 25px;
    min-width: 210px;
}
#profil {
    display: flex;
    flex-direction: row;
    width: 170px;
    height: 170px;
    transform: rotate(-0.019turn);
    object-fit: cover;
    border-radius: 50%;
    cursor: zoom-in;
    margin-bottom: 15px;
    box-shadow: 0 0 10px #2c1d27;
    border: 3px solid #2c1d27;
}
.head {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 1000px;
    color: white;
    font-size: 1em;
    background-color:#782221;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
}
.head p {
    font-size: 1.6em;
    font-weight: 500;
    font-family:"Urbanist", sans-serif;
}
address {
    display: flex;
    justify-content: center;
    justify-content: space-around;
    flex-direction: row;
    height: 80px;
    align-items: center;
    background-color:#2c1d27 ;
} 
A {
    text-decoration: none;
}
.textX {
    margin-left: 130px;
}
.textY {
    margin-left: 20px;
    margin-right: 20px;
}
.textY h2{
    margin-left: 10px;
}
main {
    display: flex;
    flex-direction:row;
    justify-content: center;
    justify-content: space-between;
    max-height: 1400px;
}
#Section1 {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 960px;
    text-align: justify;
    color: white;
    background-color:#782221;
    margin-right: 20px;
}
#Section2 {
    display: flex;
    flex-direction: column;
    width: 700px;
    height: 960px;
    margin-left: -20px;
    margin-right: 0px;
    background-color: #ababab;
}
#CvFooter {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100px;
    width: 1000px;
    background-color:#782221;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    margin-top: 0px;
    max-height: 100px;
}
.logoX {
    display: flex;
    flex-direction: row;
}
#CvFooter a img{
    display: inline-flex;
    justify-content: center;
    border-radius: 50%;
    margin: auto 5px;
    height: 40px;
    width: 40px;
    border: 2px solid #2c1d27;
    margin-top: 10px;
    margin-bottom: -10px;
}
#CvFooter a img:hover{ 
    box-shadow: 0 0 3px 3px rgb(254, 255, 254);
}
.column2{
    display: flex;
}
.Exp h2{
    margin-left: 0px;
}
.Exp {
    margin-left: -100px;
}
.Exp:hover{
    color: #071b52;
}
.formations{
    margin-left: -100px;
    margin-bottom: 20px;
}
.formations h2{
    margin-left: 0px;
}
.formations:hover{
    color: #071b52;
}
.competences{
    margin-left: 40px;
}
.competences:hover{
    color: #071b52;
}
.competences li{
    margin-left: 0px;
}
#p1{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: white;
    font-size: 15px;
}
#p2 {text-indent: 100px;
    padding: 0px 20px 0px 20px;
}
h3 {font-size: 1em;
    font-weight: 900;
}
</style>