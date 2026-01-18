---
title: "Mohebi & Associates"
type: landing

sections:
  - block: hero
    content:
      title: Decoding the Neuromodulatory Logic of Decision Making
      text: We investigate how dopamine, acetylcholine, and serotonin orchestrate learning and adaptive behavior across multiple timescales.
    design:
      background:
        color: '#0f172a'
        text_color_light: true

  - block: markdown
    content:
      title: Research Focus
      text: |
        ### Large-scale Electrophysiology
        Recording from hundreds of neurons simultaneously using Neuropixels probes.
        
        ### Optical Imaging
        Real-time monitoring of neuromodulator dynamics using fiber photometry.
        
        ### Computational Modeling
        Developing theories of how neuromodulatory signals shape learning.
---
          icon_pack: fas
          description: |
            Building biologically-informed models of learning and decision-making 
            that operate across **multiple timescales**.
            
            - Reinforcement Learning
            - Multi-timescale Dynamics
            - Bayesian Inference
    design:
      columns: '3'
      background:
        color: '#1e293b'

  # ===========================================================================
  # FEATURED PUBLICATIONS
  # ===========================================================================
  - block: collection
    id: publications
    content:
      title: Featured Publications
      subtitle: ''
      text: |
        Explore our work on the neuromodulatory basis of learning and decision-making.
        
        [View all publications →](/publication/)
      count: 4
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: citation
      columns: '1'
      background:
        color: '#0f172a'

  # ===========================================================================
  # TEAM PREVIEW
  # ===========================================================================
  - block: people
    id: team
    content:
      title: Meet the Team
      subtitle: A diverse group united by curiosity about how brains learn and decide
      text: ""
      user_groups:
        - Principal Investigator
        - Researchers
        - Graduate Students
        - Undergraduates
      sort_by: Params.last_name
      sort_ascending: true
    design:
      show_interests: false
      show_role: true
      show_social: true
      background:
        color: '#1e293b'

  # ===========================================================================
  # JOIN US CTA
  # ===========================================================================
  - block: cta-card
    id: join
    content:
      title: Join Our Team
      text: |
        We're always looking for passionate scientists to join us. We welcome students 
        and postdocs from all backgrounds who share our curiosity about how brains 
        learn and make decisions.
      button:
        text: View Open Positions
        url: /join/
    design:
      card:
        css_class: "bg-gradient-to-r from-blue-600 to-purple-600"
        css_style: ""
      background:
        color: '#0f172a'

  # ===========================================================================
  # FUNDERS
  # ===========================================================================
  - block: markdown
    id: funders
    content:
      title: Funded By
      text: |
        <div class="flex flex-wrap justify-center items-center gap-12 py-8 opacity-70">
          <div class="px-8 py-4 rounded-xl bg-white/5 border border-white/10">
            <span class="font-semibold text-slate-300">NIMH</span>
          </div>
          <div class="px-8 py-4 rounded-xl bg-white/5 border border-white/10">
            <span class="font-semibold text-slate-300">BBRF</span>
          </div>
          <div class="px-8 py-4 rounded-xl bg-white/5 border border-white/10">
            <span class="font-semibold text-slate-300">UW-Madison</span>
          </div>
        </div>
    design:
      background:
        color: '#0f172a'
---
