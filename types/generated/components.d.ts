import type { Schema, Attribute } from '@strapi/strapi';

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
      'member.team-member': MemberTeamMember;
    }
  }
}
