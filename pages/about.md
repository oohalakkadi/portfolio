---
layout: page
title: About
permalink: /about/
weight: 3
---
# **About Me**

Hi, my name is **{{ site.author.name }}** :wave:,<br>

I am a fourth-year Computation and Design dual-degree student at Duke Kunshan University in Kunshan, China and Duke University in Durham, NC. While I specialize in 3D object design and VR/AR development, I have experience in incorporating a variety of tools to bring my projects to life, including but not limited to AI/ML/NLP, web development, and UI/UX.

My true strength lies in my resourcefulness and ability to solve unusual problems with out-of-the-box thinking. I do not back down from a challenge, and take every opportunity to understand something differently for the first time.

Currently, I am on a professional development gap year as my program does not offer my major for students graduating prior to 2025. My goal over the next year is to hone my skills the best I can, whether that be through passion projects or professional experience. I hope you enjoy looking through my work!

<div class="bg-info text-white p-3 mb-4">
**Duke University** B.S. Interdisciplinary Studies
**Duke Kunshan University** B.S. Computation and Design with a track in Computer Science
</div>

<div>
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Adobe Suite" source=site.data.adobe-suite-skills %}
{% include about/skills.html title="Visual Art Software" source=site.data.visual-art-software-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
{% include about/skills.html title="Languages" source=site.data.language-skills %}
</div>

# **Relevant Coursework**
<ul class="coursework-list">
{% for course in site.data.coursework %}
  <li>{{ course.name }} <span class="course-code">{{ course.code }}</span></li>
{% endfor %}
</ul>


# **Experience**
<div class="row">
{% include about/timeline.html %}
</div>