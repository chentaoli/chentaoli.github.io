---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<section class="profile-hero">
  <div class="hero-orbit" aria-hidden="true">
    <span class="hero-monogram">LCT</span>
    <i class="orbit-dot orbit-dot-one"></i>
    <i class="orbit-dot orbit-dot-two"></i>
  </div>
  <div class="hero-copy">
    <p class="hero-eyebrow">项目实践 × 真实生活</p>
    <h1 class="hero-title">睁眼闯世界<br><span>闭眼做大梦</span></h1>
    <p class="hero-intro">从研究和项目到旅途与现场，这里收录我认真做过的事。</p>
    <div class="hero-actions">
      <a class="hero-primary" href="#publications">查看学术成果</a>
      <a class="hero-secondary" href="#blogs">翻阅生活记录</a>
    </div>
  </div>
  <div class="hero-metrics" aria-label="个人经历概览">
    <div><strong>3</strong><span>教育经历</span></div>
    <div><strong>5+</strong><span>年科研与项目实践</span></div>
    <div><strong>6</strong><span>项（共同）一作论文成果</span></div>
  </div>
</section>

<br>
<br>
<span class='anchor' id='education'></span>
# 🎓 教育经历
- *2024 - 2026*, <a href="https://hkust.edu.hk/"><img class="jpg" src="/images/HKUST_logo1.jpg" width="30pt"></a> **哲学硕士/Mphil, 生命科学和生物医学工程, 香港科技大学，中国**（中外合办）
- *2020 - 2024*, <a href="https://www.zju.edu.cn/"><img class="jpg" src="/images/ZJU_logo1.jpg" width="30pt"></a> **理学学士/BSc, 生物医学, 浙江大学，中国**
- *2020 - 2024*, <a href="https://www.ed.ac.uk/"><img class="jpg" src="/images/Edin_logo1.jpg" width="30pt"></a> **理学学士/BSc, 生物医学, 爱丁堡大学，英国**（中外合办）

碎碎念：我来自河北省保定市安国市。我们的县城很小，三条街道就可以从城东走到城西。
<br>
<br>

<span class='anchor' id='tools'></span>
# 📰 工具设计

<section class="values-showcase">
  <header class="values-head">
    <div class="values-brand" aria-hidden="true">V</div>
    <div class="values-heading">
      <p class="values-kicker">独立产品 · Windows · 公开测试</p>
      <h2>净值 <span>Values</span></h2>
      <p class="values-slogan">看见资产，而不只是看见流水。</p>
    </div>
    <span class="values-version">v1.0</span>
  </header>

  <div class="values-intro">
    <div>
      <p>一款以资产净值为核心的本地优先个人财富管理应用。它不要求用户维护繁琐的复式流水，而是从结果出发，回答三个更重要的问题：我真正拥有多少资产、资产如何分布，以及每一次投资决定带来了什么。</p>
      <div class="values-tags">
        <span>资产优先记账</span><span>本地加密</span><span>真实行情</span><span>人工确认</span>
      </div>
    </div>
    <div class="values-role">
      <small>我的角色</small>
      <strong>产品设计与独立开发</strong>
      <span>需求定义 · 信息架构 · 核算逻辑 · Flutter 实现</span>
    </div>
  </div>

  <div class="values-window" aria-label="Values 产品界面演示，所有金额均为虚构数据">
    <div class="values-windowbar">
      <div class="window-dots"><i></i><i></i><i></i></div>
      <span>Values · 资产总览</span>
      <em>演示数据</em>
    </div>
    <div class="values-app">
      <aside class="values-sidebar" aria-hidden="true">
        <b>V</b><i class="active">总</i><i>现</i><i>投</i><i>资</i><i>设</i>
      </aside>
      <div class="values-dashboard">
        <div class="values-total">
          <div>
            <span>我的净资产</span>
            <strong>¥ 1,286,420</strong>
            <small>较上月 <b>+2.8%</b></small>
          </div>
          <button type="button" disabled aria-label="演示界面的隐藏金额按钮">隐藏金额</button>
        </div>
        <div class="values-accounts">
          <article><span>现金账户</span><strong>¥ 360,200</strong><small>28.0%</small></article>
          <article><span>基金与股票</span><strong>¥ 694,680</strong><small>54.0%</small></article>
          <article><span>固定资产</span><strong>¥ 231,540</strong><small>18.0%</small></article>
        </div>
        <div class="values-insights">
          <article class="allocation-card">
            <div class="card-label"><span>资产配置</span><small>实时净值</small></div>
            <div class="allocation-ring"><span><b>54%</b>投资资产</span></div>
            <div class="allocation-legend">
              <span><i class="cash"></i>现金 28%</span>
              <span><i class="invest"></i>投资 54%</span>
              <span><i class="fixed"></i>固定资产 18%</span>
            </div>
          </article>
          <article class="decision-card">
            <div class="card-label"><span>决策复盘</span><small>如果没有这一笔？</small></div>
            <p>基金定投 · 2026.06.18</p>
            <strong>为当前净值贡献 ¥ 1,284</strong>
            <div class="decision-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
            <small>以真实交易序列比较投资决定，而不是生成模拟收益曲线。</small>
          </article>
        </div>
      </div>
    </div>
  </div>

  <div class="values-principles">
    <article><b>01</b><h3>结果优先</h3><p>首页首先呈现净资产和配置比例，让记录服务于判断，而不是让用户为流水服务。</p></article>
    <article><b>02</b><h3>数据主权</h3><p>账本默认保存在本机，使用 AES-256 加密；用户可以通过 CSV 完整导出和迁移数据。</p></article>
    <article><b>03</b><h3>机器辅助，人来决定</h3><p>行情与代码识别只负责减少输入，写入账本前始终保留最终人工确认。</p></article>
  </div>

  <div class="values-feature-grid" id="values-features">
    <article><span>01</span><h3>净值总览</h3><p>统一汇总现金、基金、股票与固定资产，观察昨日和上月变化。</p></article>
    <article><span>02</span><h3>投资核算</h3><p>记录买卖、分红、定投和费用，区分持仓盈亏与已实现收益。</p></article>
    <article><span>03</span><h3>决策分析</h3><p>比较“有这一笔”与“没有这一笔”的完整交易序列，复盘投资决定。</p></article>
    <article><span>04</span><h3>固定资产</h3><p>支持房产、车辆等长期资产，以及直线法和双倍余额递减法折旧。</p></article>
  </div>

  <footer class="values-foot">
    <div><small>技术实现</small><strong>Flutter · Dart · Material 3 · Hive AES-256</strong></div>
    <div><small>产品状态</small><strong>Windows 公开测试版</strong></div>
  </footer>
</section>

<br>
<br>
<span class='anchor' id='publications'></span>
# 📝 学术成果

碎碎念：我的科研生涯已经结束啦！沉浮实验室5年，做过了好多好多实验。以前读博的勇气源于对于学术理想的追崇，后来的退堂鼓来源于对于人生的重新定义，其实一直做实验没有优秀的产出在一个要求极高但收益极低的专业让人很难不怀疑自己的价值。Anyway，我也算对于学术有了一些贡献！

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">iScience 2024</div><img src='images/CCS_2026_Diphyllin.jpg' alt="sym" width="100%"></div></div><div class='paper-box-text' markdown="1">
-	第一作者（共同） **Targeting endolysosomal acidification inhibits poxvirus entry and replication**. *Cell communication and signaling*. []() [[论文链接]](https://doi.org/10.1186/s12964-026-02705-6) [[全文 PDF]](/pdf/6. CCS_2026.pdf) <br>
<br>
我们发现Diphyllin是一种广谱抗痘病毒药物，其作用机制是靶向宿主内溶酶体的酸化，加之其与TMEM175激活产生的协同作用，凸显了调节宿主pH值作为治疗策略的重要性。
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">iScience 2024</div><img src='images/iScience_2024_HSCT.jpg' alt="sym" width="100%"></div></div><div class='paper-box-text' markdown="1">
-	第一作者（共同） **Monocytes in allo-HSCT with aged donors secrete IL-1/IL-6/TNF to increase the risk of GVHD and damage the aged HSCs**. *iScience*. DOI: 10.1016/j.isci.2024.109126. []() [[论文链接]](https://doi.org/10.1016/j.isci.2024.109126) [[全文 PDF]](/pdf/3. iScience_2024.pdf) <br>
<br>
我们发现异基因造血干细胞移植（allo-HSCT）中老年供者更容易导致急性移植物抗宿主病（aGVHD），这是由于一些炎症通路在髓系细胞中上调诱导其炎症性分化导致的。
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJMS 2025</div><img src='images/IJMS_2025_MR.jpg' alt="sym" width="100%"></div></div><div class='paper-box-text' markdown="1">
-	第一作者（共同）Correlation Among Psoriasis, Iridocyclitis, and Non-alcoholic Fatty Liver Disease: Insights from Mendelian Randomization and Mediation Analysis. International Journal of Medical Sciences, 22(1), 121-131. DOI: 10.7150/ijms.102369. []() [[论文链接]](https://doi.org/10.7150/ijms.102369) [[全文 PDF]](/pdf/5. IJMS_2025.pdf) <br>
<br>
我们发现虹膜睫状体炎与非酒精性脂肪性肝病（NAFLD）风险升高显著相关；同时，银屑病可能参与虹膜睫状体炎诱发 NAFLD 的作用机制。
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">STTT 2023</div><img src='images/STTT_2023.png' alt="sym" width="100%"></div></div><div class='paper-box-text' markdown="1">
-	第一作者（共同）**Aging and Inflammation: Signaling Pathways and Intervention Therapies**. *Signal Transduction and Targeted Therapy*. DOI: 10.1038/s41392-023-01502-8. []() [[论文链接]](https://doi.org/10.1038/s41392-023-01502-8) [[全文 PDF]](/pdf/2. STTT_2023.pdf)  <br>
<br>
本文从分子、细胞、器官和疾病等层面讨论炎症性衰老，回顾现有衰老模型、前沿单细胞技术的应用，以及抗衰老干预策略。我们重点梳理炎症与衰老的关键特征和潜在机制，并总结该领域的最新进展与未来方向，为预防和缓解衰老相关疾病、改善生命质量提供理论基础。
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJBS 2024</div><img src='images/IJBS_2024.png' alt="sym" width="100%"></div></div><div class='paper-box-text' markdown="1">
-	第一作者（共同）**Synthetic Cells and Molecules in Cellular Immunotherapy**. *International Journal of Biological Sciences*. DOI: 10.7150/ijbs.94346. []() [[论文链接]](https://doi.org/10.7150/ijbs.94346) [[全文 PDF]](/pdf/4. IJBS_2024.pdf)  <br>
<br>
本文总结合成细胞与合成分子在细胞免疫治疗中的创新策略，讨论现有方案的局限，并展望下一代细胞免疫治疗的发展方向。
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">BEHDP 2022</div><img src='images/BEHDP_2022.png' alt="sym" width="100%"></div></div><div class='paper-box-text' markdown="1">
-	第一作者（共同） **CAR-T Immunotherapy to Beat Solid Tumors: From Challenges to Improvements**. *Highlights in Science, Engineering and Technology*. DOI: 10.54097/hset.v8i.1110. []() [[论文链接]](https://doi.org/10.54097/hset.v8i.1110) [[全文 PDF]](/pdf/1. BEHDP_2022.pdf)  <br>
<br>
本文介绍 CAR-T 免疫治疗的作用机制、发展历程与临床应用，并讨论其治疗实体瘤的现状、挑战、改进策略及未来方向。
</div>
</div>

<br>
<br>
<span class='anchor' id='honors'></span>
# 🏅 荣誉与奖项
- *2024. 6* 浙江大学优秀本科毕业生。[]() [[证书]](images/浙江大学优秀毕业生.jpeg)
- *2022.10* 国际遗传工程机器大赛（iGEM）银奖。[]() [[证书]](images/Prize_iGEM-2022-certificates.png) 
- *2019.10* 河北省三好学生
<br>
<br>

<span class='anchor' id='tools'></span>
# 📰 工具设计

<section class="values-showcase">
  <header class="values-head">
    <div class="values-brand" aria-hidden="true">V</div>
    <div class="values-heading">
      <p class="values-kicker">独立产品 · Windows · 公开测试</p>
      <h2>净值 <span>Values</span></h2>
      <p class="values-slogan">看见资产，而不只是看见流水。</p>
    </div>
    <span class="values-version">v1.0</span>
  </header>

  <div class="values-intro">
    <div>
      <p>一款以资产净值为核心的本地优先个人财富管理应用。它不要求用户维护繁琐的复式流水，而是从结果出发，回答三个更重要的问题：我真正拥有多少资产、资产如何分布，以及每一次投资决定带来了什么。</p>
      <div class="values-tags">
        <span>资产优先记账</span><span>本地加密</span><span>真实行情</span><span>人工确认</span>
      </div>
    </div>
    <div class="values-role">
      <small>我的角色</small>
      <strong>产品设计与独立开发</strong>
      <span>需求定义 · 信息架构 · 核算逻辑 · Flutter 实现</span>
    </div>
  </div>

  <div class="values-window" aria-label="Values 产品界面演示，所有金额均为虚构数据">
    <div class="values-windowbar">
      <div class="window-dots"><i></i><i></i><i></i></div>
      <span>Values · 资产总览</span>
      <em>演示数据</em>
    </div>
    <div class="values-app">
      <aside class="values-sidebar" aria-hidden="true">
        <b>V</b><i class="active">总</i><i>现</i><i>投</i><i>资</i><i>设</i>
      </aside>
      <div class="values-dashboard">
        <div class="values-total">
          <div>
            <span>我的净资产</span>
            <strong>¥ 1,286,420</strong>
            <small>较上月 <b>+2.8%</b></small>
          </div>
          <button type="button" disabled aria-label="演示界面的隐藏金额按钮">隐藏金额</button>
        </div>
        <div class="values-accounts">
          <article><span>现金账户</span><strong>¥ 360,200</strong><small>28.0%</small></article>
          <article><span>基金与股票</span><strong>¥ 694,680</strong><small>54.0%</small></article>
          <article><span>固定资产</span><strong>¥ 231,540</strong><small>18.0%</small></article>
        </div>
        <div class="values-insights">
          <article class="allocation-card">
            <div class="card-label"><span>资产配置</span><small>实时净值</small></div>
            <div class="allocation-ring"><span><b>54%</b>投资资产</span></div>
            <div class="allocation-legend">
              <span><i class="cash"></i>现金 28%</span>
              <span><i class="invest"></i>投资 54%</span>
              <span><i class="fixed"></i>固定资产 18%</span>
            </div>
          </article>
          <article class="decision-card">
            <div class="card-label"><span>决策复盘</span><small>如果没有这一笔？</small></div>
            <p>基金定投 · 2026.06.18</p>
            <strong>为当前净值贡献 ¥ 1,284</strong>
            <div class="decision-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
            <small>以真实交易序列比较投资决定，而不是生成模拟收益曲线。</small>
          </article>
        </div>
      </div>
    </div>
  </div>

  <div class="values-principles">
    <article><b>01</b><h3>结果优先</h3><p>首页首先呈现净资产和配置比例，让记录服务于判断，而不是让用户为流水服务。</p></article>
    <article><b>02</b><h3>数据主权</h3><p>账本默认保存在本机，使用 AES-256 加密；用户可以通过 CSV 完整导出和迁移数据。</p></article>
    <article><b>03</b><h3>机器辅助，人来决定</h3><p>行情与代码识别只负责减少输入，写入账本前始终保留最终人工确认。</p></article>
  </div>

  <div class="values-feature-grid" id="values-features">
    <article><span>01</span><h3>净值总览</h3><p>统一汇总现金、基金、股票与固定资产，观察昨日和上月变化。</p></article>
    <article><span>02</span><h3>投资核算</h3><p>记录买卖、分红、定投和费用，区分持仓盈亏与已实现收益。</p></article>
    <article><span>03</span><h3>决策分析</h3><p>比较“有这一笔”与“没有这一笔”的完整交易序列，复盘投资决定。</p></article>
    <article><span>04</span><h3>固定资产</h3><p>支持房产、车辆等长期资产，以及直线法和双倍余额递减法折旧。</p></article>
  </div>

  <footer class="values-foot">
    <div><small>技术实现</small><strong>Flutter · Dart · Material 3 · Hive AES-256</strong></div>
    <div><small>产品状态</small><strong>Windows 公开测试版</strong></div>
  </footer>
</section>

<br>
<br>
<span class='anchor' id='blogs'></span>
# 💻 生活记录

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">张杰演唱会</div><img src='images/2024.11.09.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.11.09* 🎤2024张杰未·LIVE开往1982巡回演唱会（南宁站）- 147 - 和表姐一起！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">诺奖得主</div><img src='images/2024.11.01.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.11.01* 📷与2014年诺贝尔化学奖得主Stefan W. Hell的合影！
</div>
</div>

<details>
<summary>展开全部生活记录</summary>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">新疆行</div><img src='images/20240714.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.07.14* 🌊新疆行·独库公路&独山子大峡谷！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">新疆行</div><img src='images/20240713.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.07.13* 🐏新疆行· 那拉提！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">新疆行</div><img src='images/20240712.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.07.12* 🏔新疆行· 伊昭公路&夏塔！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">新疆行</div><img src='images/20240711.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.07.11* 🌊新疆行· 赛里木湖！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">新疆行</div><img src='images/20240710.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.07.10* 🆒新疆行· 世界魔鬼城！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">新疆行</div><img src='images/20240709.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.07.09* 🤠新疆行· 喀纳斯！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">新疆行</div><img src='images/20240708.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.07.08* 🏕新疆行· 禾木村！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">新疆行</div><img src='images/20240707.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.07.07* 🌊新疆行· 天山天池！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">新疆行</div><img src='images/20240706.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.07.06* 🏙新疆行· 乌鲁木齐！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">本科毕业</div><img src='images/2024.06.22.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.06.22* 🎓️重新介绍一下，我是浙江大学2024届毕业生！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">云南行</div><img src='images/2024.06.16.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.06.16* 🌊云南行 · 洱海！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">云南行</div><img src='images/2024.06.15.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.06.15* 🦌云南行 · 普达措国家公园！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">云南行</div><img src='images/2024.06.14.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.06.14* 🏕云南行 · 独克宗古城！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">云南行</div><img src='images/2024.06.13.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.06.13* 🏔︎云南行 · 玉龙雪山！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">本科毕业</div><img src='images/2024.06.12.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.06.12* 🎓️一张可爱的毕业纪念照！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">千岛湖</div><img src='images/2024.05.31.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.05.31* 🌊毕业进程完结后的度假！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ZJU BSc Dissertation</div><img src='images/2024.05.24.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.05.24* 😎浙江大学毕业论文提交！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">小熊收集计划</div><img src='images/2024.05.22.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.05.22* 😘浙江大学专属毕业小熊与爱丁堡大学专属毕业小熊！收集成功！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">西安行</div><img src='images/2024.05.11.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.05.11* 🤠西安行，登顶华山南峰，五岳之巅！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">西安行</div><img src='images/2024.05.10.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.05.10* 😉西安行，大唐芙蓉园！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Edin BSc Dissertation</div><img src='images/2024.04.23.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.04.23* 🫠爱丁堡大学毕业论文提交！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">谷歌学术</div><img src='images/2024.04.20.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.04.20* 👻谷歌被引用次数破百纪念！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">本科毕业答辩</div><img src='images/2024.04.16.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.04.16* 🫢浙江大学&爱丁堡大学本科毕业答辩！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">张杰演唱会</div><img src='images/2024.04.12.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.04.12* 🤗2024张杰未·LIVE开往1982巡回演唱会（南昌站）- 97！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">广州行</div><img src='images/2023.12.01.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2023.12.01* 🫣广州行，广州塔！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">卡片集合</div><img src='images/2023.05.26.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2023.05.26* 🫡身份卡集结！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">生日快乐</div><img src='images/2022.10.17.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2022.10.17* 🥳20岁生日快乐！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">浙江大学海宁国际校区</div><img src='images/2022.9.15.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2022.9.15* 😎纪念一次浙江大学海宁国际校区的日落。
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">发癫日常</div><img src='images/2022.05.02.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2022.05.02* 🥸收集发癫日常~
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">发癫日常</div><img src='images/2022.04.02.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2022.04.02* 🥸收集发癫日常~
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">520</div><img src='images/2021.05.20.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2021.05.20* 🤓属于我的花~
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">上海行</div><img src='images/2024.04.02.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2021.04.02* 🥸上海行，收集日常~
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">小熊特辑</div><img src='images/2021.03.23.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2021.03.23* 🥸带着小熊一起发癫~
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">毅行</div><img src='images/2020.10.11.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2020.10.11* 😫秋季毅行！
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">浙江大学海宁国际校区</div><img src='images/2020.9.15.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- *2020.9.15* 😎纪念一次浙江大学海宁国际校区的日落。
</div>
</div>

</details>
<br>
<br>
<span class='anchor' id='contact'></span>
# 📧 联系我
**联系方式** <br>
lichentao2002@outlook.com <br>
香港科技大学（广州）生命科学与生物医学工程学域，中国广东省广州市南沙区，511458。
<br>
<br>
<br>
