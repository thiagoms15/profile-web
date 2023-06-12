import { SectionTitle } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'
import { WorkExperience as IWorkExperience } from '@/app/types/work-experience'

type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiences"
          title="My Resume"
        />
        <p className="text-gray-400 mt-6">
          I am always open to new challenges and exciting projects.
          Let's work together to create amazing solutions for your company!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences?.sort((a,b) => {
            if (a.startDate < b.startDate) {
                return 1;
            }
            if (a.startDate > b.startDate) {
                return -1;
            }
            return 0; }).map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  )
}
