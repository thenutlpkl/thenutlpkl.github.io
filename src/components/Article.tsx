// components/Article.tsx
import { motion } from 'framer-motion';
import { Article as ArticleType } from '@/types/article.types';

interface ArticleProps {
  article: ArticleType;
}

// components/Article.tsx
const Article: React.FC<ArticleProps> = ({ article }) => {
    return (
      <div className="container mx-auto px-4 pt-[20vh] pb-16">
        <div className="max-w-[500px] mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Quote Section */}
            <div className="relative mb-32">
              <div className="px-12 py-8">
                {(article.sections[0].content[0].type === 'quote' || article.sections[0].content[0].type === 'paragraph') && (
                  <p className="text-3xl font-light leading-normal text-center text-white/90 font-serif">
                    {article.sections[0].content[0].text.split('\n').map((line, i) => (
                      <span key={i} className="block mb-3">
                        {line}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
    
            {/* Text Content Section */}
            <div className="space-y-16">
              <div className="space-y-6">
                <h2 className="text-gray-500 uppercase tracking-wider text-sm font-light">
                  Design System is a Product
                </h2>
                <div className="space-y-4">
                  <p className="text-base text-gray-400 font-light leading-relaxed">
                    Design system is a lot of things. It's a house on wheels that comprises of different elements that help drive product teams forward. Each element helps to establish standards and promotes design, content, and development consistency across apps that product teams need to build better and quicker. A design system needs design foundations to make beautiful UI, beautiful UI needs technology to deliver tangible design decisions through implementation, and UX patterns need scalable UI to make an ecosystem of patterns that product teams can follow. All of that can only be accomplished with careful coordination, planning, and communication between work streams within a system team.
                  </p>
                  <p className="text-base text-gray-400 font-light leading-relaxed">
                    Design system is always about future-proofing and being proactive in problem solving for a mass audience, in this case, design system users. What our users should get is a single source of truth when it comes to code, design, and content. A design system must provide a comprehensive set of tools as well as support our users would need to create products that are cohesive, trustworthy, and easy to use for our end users.
                  </p>
                </div>
              </div>
    
              <div className="space-y-6">
                <h2 className="text-gray-500 uppercase tracking-wider text-sm font-light">
                  Design System Takes a Village (Multidisciplinary Team)
                </h2>
                <div className="space-y-4">
                  <p className="text-base text-gray-400 font-light leading-relaxed">
                    In reality, design system is an investment and it is hard work. There are a lot of different tasks to tackle everyday and there needs to be a group of individuals with different expertise to do the work (and actually enjoy it and understand the value of it). The creation process of any system tooling and resources should be collaborative and inclusive so working with product teams is a must (hint hint: anything the design system puts out is for them to use!) Good design system materials should be well researched and well tested, and there should always be room for enhancements so don't be afraid of change. The basic makeup of a design system team should involve engineers, designers, and writers, as well as individuals focusing on design system advocacy and education which contributes to the success of a working system.
                  </p>
                </div>
              </div>
    
              <div className="space-y-6">
                <h2 className="text-gray-500 uppercase tracking-wider text-sm font-light">
                  Design System Never Stops
                </h2>
                <div className="space-y-4">
                  <p className="text-base text-gray-400 font-light leading-relaxed">
                    You might have heard at some point that a design system is "a living and breathing thing" so it grows and changes according to the needs from product teams. The wheels on this moving house are always turning. It requires people to drive it but it also needs fuel. The fuel comes from product teams needing new components or new guidelines, the needs to improve existing documentation to cover new use cases, or the needs for component enhancements and bug fixes. The design system needs to be able to support these different types of requests constantly, and it needs the oil in the gears to help keep things running smoothly.
                  </p>
                </div>
              </div>
    
              <div className="space-y-6">
                <h2 className="text-gray-500 uppercase tracking-wider text-sm font-light">
                  Design System is More Than Just a "Library of Stuff"
                </h2>
                <div className="space-y-4">
                  <p className="text-base text-gray-400 font-light leading-relaxed">
                    That "oil in the gears" I mentioned above is made of communication and engagement, which can turn into mutual trust between the design system and product teams. Relationship building is something people often forget or miss when they think about design systems. It's crucial to spend time building connections and really listen to the challenges product teams and designers are facing. And it's necessary to build a community and culture that promotes collaboration and inclusion when we build a design system – a system that people can respect, trust, and are happy to contribute to and get involved in because it is meant to be for everyone.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

export default Article;