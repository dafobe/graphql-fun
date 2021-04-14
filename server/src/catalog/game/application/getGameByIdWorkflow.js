// import InMemoryGameRepository from '../infraestructure/inMemoryGameRepository.js';
import {repositoryFactory as bggRepositoryFactory} from '../infraestructure/bggXML2GameRepository.js';
import {xml2ToGameMapper as mapper} from '../infraestructure/xml2ToGameMapper.js';
import {useCaseFactory} from './getGameByIdUseCase.js';

const bggRepository = bggRepositoryFactory({mapper})

export const getGameById = useCaseFactory({repository: bggRepository})