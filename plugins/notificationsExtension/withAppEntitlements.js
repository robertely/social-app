const {withEntitlementsPlist} = require('expo/config-plugins')

const withAppEntitlements = config => {
  return withEntitlementsPlist(config, async config => {
    config.modResults['com.apple.security.application-groups'] = [
      `group.com.robertely.dietsky.poc`,
    ]
    return config
  })
}

module.exports = {withAppEntitlements}
