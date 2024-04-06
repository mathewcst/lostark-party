import { Section } from '@/components/Section'
import { useRosterStore } from '@/store/roster'
import { AddCharacter } from './-AddCharacter'
import { CharacterItem } from './-CharacterItem'
import { NoCharacters } from './-NoCharacters'

export const CharacterList = () => {
  const { characters } = useRosterStore((state) => state)

  const hasCharacters = characters.length > 0

  return (
    <div className="my-8">
      <Section.Header>
        <Section.Subtitle>Character List</Section.Subtitle>
        <AddCharacter />
      </Section.Header>

      {hasCharacters ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-start justify-start gap-4 my-4">
          {characters.map((character) => (
            <CharacterItem key={character.name} character={character} />
          ))}
        </div>
      ) : (
        <NoCharacters />
      )}
    </div>
  )
}
