/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A token that identifies the business vertical supported by the SASE
 *
 * @remarks
 * products managed by this TSG.
 *
 */
export enum TenantServiceGroupVertical {
  HighTech = "High Tech",
  Education = "Education",
  Manufacturing = "Manufacturing",
  Hospitality = "Hospitality",
  ProfessionalAndLegalServices = "Professional & Legal Services",
  WholesaleAndRetail = "Wholesale & Retail",
  Finance = "Finance",
  Telecommunications = "Telecommunications",
  StateAndLocalGovernment = "State & Local Government",
  TransportationAndLogistics = "Transportation & Logistics",
  FederalGovernment = "Federal Government",
  MediaAndEntertainment = "Media & Entertainment",
  NonclassifiableEstablishments = "Nonclassifiable Establishments",
  Healthcare = "Healthcare",
  UtilitiesAndEnergy = "Utilities & Energy",
  Insurance = "Insurance",
  Agriculture = "Agriculture",
  PharmaAndLifeSciences = "Pharma & Life Sciences",
  Construction = "Construction",
  AerospaceAndDefense = "Aerospace & Defense",
  RealEstate = "Real Estate",
  RestaurantFoodIndustry = "Restaurant/Food Industry",
  Other = "Other",
}

/**
 * Successful response.
 */
export class TenantServiceGroup extends SpeakeasyBase {
  /**
   * The tenant service group's display name.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "display_name" })
  displayName?: string;

  /**
   * The tenant service group's ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The TSG ID for this tenant service group's parent.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "parent_id" })
  parentId?: string;

  /**
   * The email address of the person or organization that should
   *
   * @remarks
   * be contacted for support of this TSG.
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "support_contact" })
  supportContact?: string;

  /**
   * A token that identifies the business vertical supported by the SASE
   *
   * @remarks
   * products managed by this TSG.
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "vertical" })
  vertical?: TenantServiceGroupVertical;
}
