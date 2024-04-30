import dynamic from 'next/dynamic';
import { Metadata } from "next";
import Image from "next/image";

import Accordion from "@components/sections/Accordion";
import Carousel from '@components/sections/Carousel';
import Grid from '@components/sections/Grid';
import Hero from '@components/sections/Hero';
import Picture from '@components/elements/Picture';
import RTE from '@components/sections/RTE';
import Search from '@components/sections/Search';
import TextAndMedia from '@components/sections/TextAndMedia';
import VideoClip from '@components/sections/VideoClip';
import VideoEmbed from "@components/sections/VideoEmbed";

import CTA from '@components/elements/CTA';

export const metadata: Metadata = {
  title: 'Generated Page Title',
  description: 'Generated page description goes here.',
}

export default function Page() {  
  return (
    <>
      <main> 

        <h1>WWF</h1>

        <h2 className="text-4">Sections</h2>
        <Accordion/>{/* Pass in classes: className={styles.propClass} */}
        <Carousel/>
        <Grid/>
        <Hero/>
        <RTE/>
        <Search/>
        <TextAndMedia/>
        <VideoClip/>
        <VideoEmbed/>

        <h2 className="text-4">Elements</h2>
        <CTA/>

        <p className="text-4">Custom Picture Component : Utilizes Next's Image Component to Process Images</p>
        <p>1x and 2x images are created via Next's Image Component.</p>
        <p>Exmaple has separate image sources that switch at the 768px breakpoint.</p>

        <Picture
          desktopSrc="https://files.worldwildlife.org/wwfcmsprod/images/Flooded_roadway/1440x580_hash/32ezvmh5mn_shutterstock_226943815.jpg"
          desktopWidth={1440}
          desktopHeight={800}
          mobileSrc="https://files.worldwildlife.org/wwfcmsprod/images/Water_AWS_339873/800x533_hash/5xsjtdtf45_SCR_339873_alliance_for_water.jpg"
          mobileWidth={400}
          mobileHeight={400}
          alt="Picture with Desktop and Mobile Images"
        />

        <p>Example has single image source.</p>
        <Picture
          desktopSrc="https://files.worldwildlife.org/wwfcmsprod/images/Flooded_roadway/1440x580_hash/32ezvmh5mn_shutterstock_226943815.jpg"
          desktopWidth={1440}
          desktopHeight={800}
          alt="APicture with Desktop Image"
        />

        <p className="text-4">Next's Default Image Component</p>
        <p>Creates 1x and 2x images, but doesn't allow for art direction of images based on breakpoint.</p>
        <p>Exmaple has separate image sources that switch at the 768px breakpoint.</p>
        <Image src="https://files.worldwildlife.org/wwfcmsprod/images/Flooded_roadway/1440x580_hash/32ezvmh5mn_shutterstock_226943815.jpg" alt="Descriptive Image Text" width={1440} height={800} />
      </main>    </>
  );
}

