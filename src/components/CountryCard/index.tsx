import React from 'react'
import { CountryCardComponent, CountryCardProps } from '../interfaces'
import {
	Country,
	Flag,
	Header,
	Name,
	NativeName,
	SubHeader,
	Languages,
	Tag,
	LangTags,
	Capital
} from './styled'
import { Subtext } from '../../config/baseStyles'
export const CountryCard: CountryCardComponent = ({
	country
}: CountryCardProps) => {
	return (
		<Country>
			<Header>
				<Flag
					src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
				/>
				<Name>
					{country.name}
					<Subtext color='white'>, {country.continent?.code}</Subtext>
				</Name>
				<SubHeader>
					<NativeName>
						{country.native}, {country.emoji}
					</NativeName>
				</SubHeader>
				{country.capital && (
					<Capital>
						<span>Capital:</span> {country.capital}
					</Capital>
				)}
			</Header>

			{country.languages.length ? (
				<Languages>
					<span>Official languages</span>
					<LangTags>
						{country.languages.map((Language) => (
							<Tag key={Language.name}>{Language.name}</Tag>
						))}
					</LangTags>
				</Languages>
			) : null}
		</Country>
	)
}
