import type { Schema, Attribute } from '@strapi/strapi';

export interface EventScheduleCard extends Schema.Component {
  collectionName: 'components_event_schedule_cards';
  info: {
    displayName: 'ScheduleCard';
    icon: 'clock';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    startTime: Attribute.Time;
    endTime: Attribute.Time;
    date: Attribute.DateTime;
  };
}

export interface MemberSpeaker extends Schema.Component {
  collectionName: 'components_member_speakers';
  info: {
    displayName: 'speaker';
    icon: 'discuss';
  };
  attributes: {
    profile: Attribute.Relation<
      'member.speaker',
      'oneToOne',
      'api::profile.profile'
    >;
    title: Attribute.String;
    description: Attribute.Text;
    externalProfileLink: Attribute.String;
    image: Attribute.Media;
  };
}

export interface MemberTeamMember extends Schema.Component {
  collectionName: 'components_member_team_members';
  info: {
    displayName: 'TeamMember';
    icon: 'user';
  };
  attributes: {
    profile: Attribute.Relation<
      'member.team-member',
      'oneToOne',
      'api::profile.profile'
    >;
    Role: Attribute.String & Attribute.Required;
    priority: Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'event.schedule-card': EventScheduleCard;
      'member.speaker': MemberSpeaker;
      'member.team-member': MemberTeamMember;
    }
  }
}
