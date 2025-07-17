import * as process from 'process';

export const BASE_URL = process.env.API_DOMAIN || process.env.NEXT_PUBLIC_API_DOMAIN;
export const MODIFICATION_URL = '/api/transcribation/projects' as const;

export const GET_TRANSCRIBATION = '/transcribation/queue' as const;
export const GET_TRANSCRIBATION_AND_TRANSLATE = '/transcribation-and-translate/queue' as const;
export const GET_SUBTITLES = '/subtitles/queue' as const;
export const GET_TRANSCRIBING_CHECK_LANGUAGE = '/transcribing-check-language' as const;

export const POST_UPLOAD = '/upload';
