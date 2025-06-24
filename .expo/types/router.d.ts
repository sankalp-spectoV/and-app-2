/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/auth/forgot-password`; params?: Router.UnknownInputParams; } | { pathname: `/auth/register`; params?: Router.UnknownInputParams; } | { pathname: `/auth/verify-otp`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/forgot-password`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/register`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/verify-otp`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/auth/forgot-password${`?${string}` | `#${string}` | ''}` | `/auth/register${`?${string}` | `#${string}` | ''}` | `/auth/verify-otp${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/auth/forgot-password`; params?: Router.UnknownInputParams; } | { pathname: `/auth/register`; params?: Router.UnknownInputParams; } | { pathname: `/auth/verify-otp`; params?: Router.UnknownInputParams; };
    }
  }
}
