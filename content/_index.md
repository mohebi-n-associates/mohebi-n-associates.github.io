---
# =============================================================================
# Mohebi Lab Homepage
# This file controls the homepage layout using Hugo Blox widgets
# =============================================================================
title: "Mohebi & Associates"
type: landing

# Design configuration
design:
  # CSS classes for the page
  css_class: dark

sections:
  # ===========================================================================
  # HERO SECTION
  # ===========================================================================
  - block: hero
    id: hero
    content:
      title: |
        Decoding the
        **Neuromodulatory Logic**
        of Decision Making
      text: |
        We investigate how **dopamine**, **acetylcholine**, and **serotonin** 
        orchestrate learning and adaptive behavior across multiple timescales.
        
        {{% cta cta_link="/research/" cta_text="Explore Our Research →" %}}
        {{% cta cta_link="/publication/" cta_text="View Publications" cta_new_tab="false" %}}
      
    design:
      spacing:
        padding: ['200px', '0', '200px', '0']
      background:
        gradient_start: '#0f172a'
        gradient_end: '#1e293b'
        gradient_angle: 135
        text_color_light: true

  # ===========================================================================
  # NEUROMODULATOR BADGES
  # ===========================================================================
  - block: markdown
    id: neuromodulators
    content:
      title: ""
      text: |
        <div class="flex flex-wrap justify-center gap-4 py-8">
          <span class="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 font-mono text-sm text-blue-400">
            DA // Dopamine
          </span>
          <span class="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30 font-mono text-sm text-purple-400">
            ACh // Acetylcholine
          </span>
          <span class="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 font-mono text-sm text-cyan-400">
            5-HT // Serotonin
          </span>
          <span class="px-4 py-2 rounded-lg bg-pink-500/10 border border-pink-500/30 font-mono text-sm text-pink-400">
            NE // Norepinephrine
          </span>
        </div>
    design:
      background:
        color: '#0f172a'

  # ===========================================================================
  # RESEARCH PILLARS
  # ===========================================================================
  - block: features
    id: research-pillars
    content:
      title: Three Pillars of Discovery
      subtitle: Integrating cutting-edge techniques to unravel neuromodulatory complexity
      text: ""
      items:
        - name: Large-scale Electrophysiology
          icon: bolt
          icon_pack: fas
          description: |
            Recording from hundreds of neurons simultaneously across prefrontal cortex 
            and basal ganglia using high-density **Neuropixels probes**.
            
            - Neuropixels 2.0
            - Prefrontal Cortex (PFC)
            - Basal Ganglia Circuits
        
        - name: Optical Imaging
          icon: eye
          icon_pack: fas
          description: |
            Real-time monitoring of neuromodulator dynamics using genetically-encoded 
            sensors and **multi-site fiber photometry**.
            
            - Fiber Photometry
            - 2-Photon Microscopy
            - GRAB/dLight Sensors
        
        - name: Computational Modeling
          icon: microchip
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
