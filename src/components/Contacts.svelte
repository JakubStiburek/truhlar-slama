<script>
    const mail = "ondrej.slama@truhlarslama.cz";
    const tel = "608334824";
    const insta = "https://www.instagram.com/truhlar.slama/";
</script>

<ul class="list-none">
    <li class="py-1.5 hover:text-blue-400"><a
            href={`tel:${tel}`}>{`+420 ${tel.substring(0, 3)} ${tel.substring(3, 6)} ${tel.substring(6, 9)}`}</a></li>
    <li class="py-1.5 hover:text-blue-400"><a href={`mailto:${mail}`}>{mail}</a></li>
    <li class="py-1.5 hover:text-blue-400"><a href={insta}>IG: @truhlar.slama</a>
    </li>
</ul>
