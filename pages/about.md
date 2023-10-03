---
layout: page
title: About
permalink: /about/
weight: 3
---

# **Skills**
<div>
{% include about/skills.html title="Programming" source=site.data.programming-skills %}
{% include about/skills.html title="Adobe Suite" source=site.data.adobe-suite-skills %}
{% include about/skills.html title="Visual Art Software" source=site.data.visual-art-software-skills %}
{% include about/skills.html title="Other" source=site.data.other-skills %}
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