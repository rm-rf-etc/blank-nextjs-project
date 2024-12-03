import { ForwardRefExoticComponent } from 'react'
import {
    IconAdjustments,
    IconCalendarStats,
    IconFileAnalytics,
    IconGauge,
    IconLock,
    IconNotes,
    IconPresentationAnalytics,
} from '@tabler/icons-react'

type IconType = typeof IconAdjustments

export const icons: Record<string, IconType> = {
    IconAdjustments,
    IconCalendarStats,
    IconFileAnalytics,
    IconGauge,
    IconLock,
    IconNotes,
    IconPresentationAnalytics,
}

export const GetIcon = (key: string): IconType | undefined => (
    key in icons ? icons[key] : undefined
)
