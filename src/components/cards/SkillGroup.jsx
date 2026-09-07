import Card from '@/components/ui/Card'
import Chip from '@/components/ui/Chip'
import { EVIDENCE, TIERS } from '@/data/skills'

export default function SkillGroup({ group }) {
  return (
    <Card className="p-5">
      <h3 className="text-sm font-semibold tracking-wide text-subtle uppercase">{group.label}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => {
          const used = skill.usedIn?.map((id) => EVIDENCE[id]).filter(Boolean) ?? []
          return (
            <li key={skill.name}>
              <Chip
                tier={group.tiered ? skill.tier : 'flat'}
                srSuffix={group.tiered ? TIERS[skill.tier]?.srLabel : undefined}
                title={used.length ? `Used in: ${used.join(' · ')}` : undefined}
              >
                {skill.name}
              </Chip>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
