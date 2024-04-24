import { EmptyState } from '@/components/EmptyState'
import { useRosterStore } from '@/store/roster'
import { CharacterItem } from './-CharacterItem'

export const CharacterList = () => {
  const { characters } = useRosterStore((state) => state)

  const hasCharacters = characters.length > 0

  return (
    <>
      {hasCharacters ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-start justify-start gap-4 my-4">
          {characters.map((character) => (
            <CharacterItem key={character.name} character={character} />
          ))}
        </div>
      ) : (
        <EmptyState>No characters found</EmptyState>
      )}
    </>
  )
}
