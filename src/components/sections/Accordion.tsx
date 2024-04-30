'use client'

import React, { useState, useEffect } from 'react';
import styles from '@stylesSection/Accordion.module.scss';

type AccordionProps = {
  children?: React.ReactNode;
  className?: string;
};

const Accordion: React.FC<AccordionProps> = ({ children, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  useEffect(() => {
    // This effect runs only on the client side
    // You can use it for any client-side logic, such as initializing state
    setOpenIndex(null); // Ensure accordion is closed on initial render on the client
  }, []);

  const handleToggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${styles['accordion']} ${className || ''}`}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement, {
          isOpen: openIndex === index,
          onToggle: () => handleToggleAccordion(index),
        })
      )}

      {/* <div className="accordion__item"> */}
	  <div className={`${styles['accordion__item']} ${openIndex === 0 ? styles['accordion__item--open'] : ''}`}>
        <button
          className={`${styles['accordion__button']} text-6`}
          aria-expanded={openIndex === 0 ? 'true' : 'false'}
          onClick={() => handleToggleAccordion(0)}
          aria-controls="accordion-region-1"
        >
          Item #1
        </button>

        <div
          id="accordion-region-1"
          role="region"
		  className={`${styles['accordion__panel']} text-6`}
          
          aria-hidden={openIndex === 0 ? 'false' : 'true'}
        >
          <div className="accordion__text">Description text</div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;






{/* <script>
	class Accordion {
		[x: string]: any

		constructor(selector: string | Element) {
			if (typeof selector === 'string') {
				this.accordion = document.querySelector(selector);
			} else {
				this.accordion = selector;
			}

			// Get all items
			this.accordionItems = this.accordion.querySelectorAll('.accordion__item')

			// Event listeners
			this.accordionItems.forEach((item) => {
				this.button = item.querySelector('.accordion__button')
				this.button.addEventListener('click', () => this.toggleAccorddionItem(item))
			})
		}

		// Close Items
		closeAccordionItems = (item) => {
			this.accordionItems.forEach((item) => {
				// Only if Item isn't open
				if (item.classList.contains('accordion__item--open')) {
					item.classList.remove('accordion__item--open')
					item.querySelector('button').setAttribute('aria-expanded', false)
					item.querySelector('button').nextElementSibling.setAttribute('aria-hidden', true)
				}
			})
		}

		// Toggle Item Open/Close
		toggleAccorddionItem = (item) => {
			this.button = item.querySelector('.accordion__button')

			// If button isn't in opened Item, close any open Items
			if (!this.button.parentElement.classList.contains('accordion__item--open')) {
				this.closeAccordionItems(item)
			}

			// Open/Close Clicked Item
			this.button.parentElement.classList.toggle('accordion__item--open')
			this.button.setAttribute('aria-expanded', `${!(this.button.getAttribute('aria-expanded') === 'true')}`)
			this.button.nextElementSibling.setAttribute('aria-hidden', `${!(this.button.nextElementSibling.getAttribute('aria-hidden') === 'true')}`)
		}
	}
	document.addEventListener('astro:page-load', () => {
		if (document.querySelector('.accordion')) {
			const accordions = document.querySelectorAll('.accordion');
			accordions.forEach((accordion) => {
				new Accordion(accordion);
			});
		}
	})
</script> */}
