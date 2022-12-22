<script>
    const mail = "ondrej.slama@truhlarslama.cz";
    const tel = "608334824";
    const insta = "https://www.instagram.com/truhlar.slama/";
    const location = "https://www.google.com/maps?q=Zbyslav+3,+339+01+Klatovy&rlz=1C5CHFA_enCZ988CZ988&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjew5C_yOD7AhWmW_EDHW9FBDsQ_AUoAXoECAEQAw";
</script>

<ul class="list-none">
    <li class="py-1.5 hover:text-blue-400"><a href={`tel:${tel}`}>{`+420 ${tel.substring(0, 3)} ${tel.substring(3, 6)} ${tel.substring(6, 9)}`}</a></li>
    <li class="py-1.5 hover:text-blue-400"><a href={`mailto:${mail}`}>{mail}</a></li>
    <li class="py-1.5 hover:text-blue-400"><a href={insta}>IG: @truhlar.slama</a>
    </li>
    <li class="py-1.5 hover:text-blue-400"><a href={location}>Zbyslav 3, <br/> 339 01 Klatovy</a></li>
</ul>
