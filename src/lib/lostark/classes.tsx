import { AeromancerIcon } from '@/components/lostark/icons/Aeromancer'
import { ArcanistIcon } from '@/components/lostark/icons/Arcanist'
import { ArtilleristIcon } from '@/components/lostark/icons/Artillerist'
import { ArtistIcon } from '@/components/lostark/icons/Artist'
import { BardIcon } from '@/components/lostark/icons/Bard'
import { BerserkerIcon } from '@/components/lostark/icons/Berserker'
import { BreakerIcon } from '@/components/lostark/icons/Breaker'
import { DeadeyeIcon } from '@/components/lostark/icons/Deadeye'
import { DeathbladeIcon } from '@/components/lostark/icons/Deathblade'
import { DestroyerIcon } from '@/components/lostark/icons/Destroyer'
import { GlaivierIcon } from '@/components/lostark/icons/Glaivier'
import { GunlancerIcon } from '@/components/lostark/icons/Gunlancer'
import { GunslingerIcon } from '@/components/lostark/icons/Gunslinger'
import { MachinistIcon } from '@/components/lostark/icons/Machinist'
import { PaladinIcon } from '@/components/lostark/icons/Paladin'
import { ReaperIcon } from '@/components/lostark/icons/Reaper'
import { ScrapperIcon } from '@/components/lostark/icons/Scrapper'
import { ShadowhunterIcon } from '@/components/lostark/icons/Shadowhunter'
import { SharpshooterIcon } from '@/components/lostark/icons/Sharpshooter'
import { SlayerIcon } from '@/components/lostark/icons/Slayer'
import { SorceressIcon } from '@/components/lostark/icons/Sorceress'
import { SouleaterIcon } from '@/components/lostark/icons/Souleater'
import { SoulfistIcon } from '@/components/lostark/icons/Soulfist'
import { StrikerIcon } from '@/components/lostark/icons/Striker'
import { SummonerIcon } from '@/components/lostark/icons/Summoner'
import { WardancerIcon } from '@/components/lostark/icons/Wardancer'

import { IconProps } from '@/components/icons/types'
import { CLASS_ENGRAVINGS } from './engravings'

export type CharacterClass = {
  name: string
  icon: ({ className }: IconProps) => JSX.Element
  engravings: string[]
}

export const CLASSES: CharacterClass[] = [
  {
    name: 'berserker',
    icon: BerserkerIcon,
    engravings: CLASS_ENGRAVINGS.berserker,
  },
  {
    name: 'destroyer',
    icon: DestroyerIcon,
    engravings: CLASS_ENGRAVINGS.destroyer,
  },
  {
    name: 'gunlancer',
    icon: GunlancerIcon,
    engravings: CLASS_ENGRAVINGS.gunlancer,
  },
  {
    name: 'paladin',
    icon: PaladinIcon,
    engravings: CLASS_ENGRAVINGS.paladin,
  },
  {
    name: 'slayer',
    icon: SlayerIcon,
    engravings: CLASS_ENGRAVINGS.slayer,
  },
  {
    name: 'arcanist',
    icon: ArcanistIcon,
    engravings: CLASS_ENGRAVINGS.arcanist,
  },
  {
    name: 'bard',
    icon: BardIcon,
    engravings: CLASS_ENGRAVINGS.bard,
  },
  {
    name: 'sorceress',
    icon: SorceressIcon,
    engravings: CLASS_ENGRAVINGS.sorceress,
  },
  {
    name: 'summoner',
    icon: SummonerIcon,
    engravings: CLASS_ENGRAVINGS.summoner,
  },
  {
    name: 'glaivier',
    icon: GlaivierIcon,
    engravings: CLASS_ENGRAVINGS.glaivier,
  },
  {
    name: 'scrapper',
    icon: ScrapperIcon,
    engravings: CLASS_ENGRAVINGS.scrapper,
  },
  {
    name: 'soulfist',
    icon: SoulfistIcon,
    engravings: CLASS_ENGRAVINGS.soulfist,
  },
  {
    name: 'wardancer',
    icon: WardancerIcon,
    engravings: CLASS_ENGRAVINGS.wardancer,
  },
  {
    name: 'striker',
    icon: StrikerIcon,
    engravings: CLASS_ENGRAVINGS.striker,
  },
  {
    name: 'breaker',
    icon: BreakerIcon,
    engravings: CLASS_ENGRAVINGS.breaker,
  },
  {
    name: 'artillerist',
    icon: ArtilleristIcon,
    engravings: CLASS_ENGRAVINGS.artillerist,
  },
  {
    name: 'deadeye',
    icon: DeadeyeIcon,
    engravings: CLASS_ENGRAVINGS.deadeye,
  },
  {
    name: 'gunslinger',
    icon: GunslingerIcon,
    engravings: CLASS_ENGRAVINGS.gunslinger,
  },
  {
    name: 'machinist',
    icon: MachinistIcon,
    engravings: CLASS_ENGRAVINGS.machinist,
  },
  {
    name: 'sharpshooter',
    icon: SharpshooterIcon,
    engravings: CLASS_ENGRAVINGS.sharpshooter,
  },
  {
    name: 'deathblade',
    icon: DeathbladeIcon,
    engravings: CLASS_ENGRAVINGS.deathblade,
  },
  {
    name: 'reaper',
    icon: ReaperIcon,
    engravings: CLASS_ENGRAVINGS.reaper,
  },
  {
    name: 'shadowhunter',
    icon: ShadowhunterIcon,
    engravings: CLASS_ENGRAVINGS.shadowhunter,
  },
  {
    name: 'souleater',
    icon: SouleaterIcon,
    engravings: CLASS_ENGRAVINGS.souleater,
  },
  {
    name: 'aeromancer',
    icon: AeromancerIcon,
    engravings: CLASS_ENGRAVINGS.aeromancer,
  },
  {
    name: 'artist',
    icon: ArtistIcon,
    engravings: CLASS_ENGRAVINGS.artist,
  },
]

export function getClassIcon(name: string) {
  return CLASSES.find((clss) => clss.name === name)?.icon!
}
