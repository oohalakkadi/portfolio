---
layout: default
permalink: /
---
<div class="container text-center mt-5">
    <img src="/IMG_1767.heic" alt="Ooha's Photo" class="rounded-circle" style="width: 150px; height: 150px;">
    <p class="mt-3" id="intro-text" style="display: none;">Hi, I'm Ooha! It's nice to meet you.</p>
</div>

<script>
    $(document).ready(function() {
        $('#intro-text').fadeIn(2000); // 2000ms = 2 seconds
    });
</script>

{% include landing.html %}