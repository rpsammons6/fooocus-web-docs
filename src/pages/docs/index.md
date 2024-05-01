---
title: Introduction
description: Basic information about Fooocus and its functionalities. Further documentation will be provided as the software expands
---

## Overview

Fooocus is an image generating software and a rethinking of Stable Diffusion and Midjourney’s designs:

- Learned from Stable Diffusion and optimized for Discord

- Learned from Midjourney, the manual tweaking is not needed, and users only need to focus on the prompts and images.

Fooocus has included and automated lots of inner optimizations and quality improvements. Users can forget all those difficult technical parameters, and just enjoy the interaction between human and computer to "explore new mediums of thought and expanding the imaginative powers of the human species"

Fooocus supports SDXL models on [Civitai](https://civitai.com)

Let us know what models you want us to add in the Suggestions channel on the [Discord](https://discord.com/invite/uHH4y2eEUQ)

---

## Why Fooocus?

Fooocus stands as a pioneering AI image generator that reimagines the functionalities of Stable Diffusion and Midjourney's designs. Tailored and optimized specifically for Discord, Fooocus brings forth a seamless experience where users can effortlessly interact with AI to craft captivating visuals. Here's why you should opt for Fooocus:

* **Streamlined User Experience**

Gone are the days of grappling with complex technical parameters and manual tweaking. With Fooocus, users are liberated from the intricacies of prompt engineering and parameter tuning. Our platform automates inner optimizations and quality enhancements, allowing users to solely focus on unleashing their creativity through prompts and images.

* **Enhanced Efficiency**

Fooocus boasts remarkable efficiency, delivering high-quality text-to-image results in a fraction of the time compared to its counterparts. Powered by an offline GPT-2 based prompt processing engine and cutting-edge sampling improvements, Fooocus ensures stunning outcomes regardless of prompt length or complexity.

* **Diverse Model Support**

Fooocus offers an extensive range of models, including SDXL models available on Civitai. Additionally, our platform is committed to continuous innovation, with upcoming V-series and U-series models poised to elevate your creative endeavors further.

* **Advanced Image Manipulation**

Experience unparalleled control over image manipulation with Fooocus's array of features:
 - Inpainting: Utilize Fooocus's proprietary inpaint algorithm and models to seamlessly remove or add elements to images.
 - Pan: Effortlessly adjust image positioning with options to move up, down, left, or right.
 - Style and Stylize: Coming soon, Fooocus will introduce advanced style and stylization options for further customization.
 - Image Prompt: Enhance prompt understanding and result quality with Fooocus's innovative image prompt algorithm.

*  **Cutting-edge Technologies**

Fooocus leverages state-of-the-art algorithms and technologies to deliver superior results:
 - Prompt Weights: Employ A1111's reweighting algorithm for enhanced results, surpassing those achieved with conventional methods.
 - Embedding: Coming soon, users can harness embedding capabilities for enriched creative expression.
 - Negative Prompts and Aspect Ratios: Advanced functionalities such as negative prompts and aspect ratio adjustments empower users with greater flexibility and control.
 - InsightFace and FaceSwap: Coming soon, unlock new possibilities with InsightFace integration for advanced face manipulation.

*  **Community-driven Development**

At Fooocus, we prioritize community feedback and engagement. Our Suggestions channel on Discord serves as a platform for users to voice their preferences and influence future developments, ensuring that Fooocus remains at the forefront of innovation.

In essence, Fooocus redefines the image generation landscape by combining cutting-edge technology with unparalleled user experience. Whether you're a seasoned creator or a novice enthusiast, Fooocus empowers you to explore new realms of creativity and expand the boundaries of imagination.

---

## Moving from Midjourney to Fooocus
Using Fooocus is as easy (if not easier than) using Midjourney - but this does not mean we lack functionality.

**Midjourney**
```
   Takes  1 - 10 minutes per command
```

- High-quality text-to-image without needing much prompt engineering or parameter tuning.
- (Unknown method)

**Fooocus**
```
Takes between 8 seconds and 1 minute per command
```

- High-quality text-to-image without needing much prompt engineering or parameter tuning. (Fooocus has offline GPT-2 based prompt processing engine and lots of sampling improvements so that results are always beautiful, no matter your prompt is as short as “house in garden” or as long as 1000 words)
- V1 V2 V3 V4 **(Coming soon...)**
  - Input Image -> Upscale or Variation -> Vary (Subtle) / Vary (Strong)
- U1 U2 U3 U4 **(Coming soon...)** 
  - Input Image -> Upscale or Variation -> Upscale (1.5x) / Upscale (2x)
- Inpaint / Up / Down / Left / Right (Pan)
  - Input Image -> Inpaint or Outpaint -> Inpaint / Up / Down / Left / Right (Fooocus uses its own inpaint algorithm and inpaint models so that results are more satisfying than all other software that uses standard SDXL inpaint method/model)
- Image Prompt  **(Coming soon...)**
  - Input Image -> Image Prompt (Fooocus uses its own image prompt algorithm so that result quality and prompt understanding are more satisfying than all other software that uses standard SDXL methods like standard IP-Adapters or Revisions)

- `--style`
  - Advanced -> Style  **(Coming soon...)**
- `--stylize`
  - Advanced -> Stylize  **(Coming soon...)**
- `--niji`
  - Multiple models: "Anime", and "Realistic".
- `--quality`
  - Advanced -> Performance
- Prompt Weights
  - You can use " I am (happy:1.5)".

Fooocus uses A1111's reweighting algorithm so that results are better than ComfyUI if users directly copy prompts from Civitai. (Because if prompts are written in ComfyUI's reweighting, users are less likely to copy prompt texts as they prefer dragging files)
To use embedding, you can use "(embedding:file_name:1.1)"  **(Coming soon...)**
- `--no`
  - Advanced -> Negative Prompt
- `--ar`
  - Advanced -> Aspect Ratios  **(Coming soon...)**
- InsightFace
  - Input Image -> Image Prompt -> Advanced -> FaceSwap **(Coming soon...)**
