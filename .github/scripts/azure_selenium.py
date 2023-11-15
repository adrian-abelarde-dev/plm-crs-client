import argparse
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
import chromedriver_autoinstaller
from pyvirtualdisplay import Display

import time

# Set up a virtual display
display = Display(visible=0, size=(800, 800))
display.start()

# Install ChromeDriver
chromedriver_autoinstaller.install()  # Check if the current version of chromedriver exists
# and if it doesn't exist, download it automatically,
# then add chromedriver to path

# Parse command-line arguments
parser = argparse.ArgumentParser()
parser.add_argument("username")
parser.add_argument("password")
parser.add_argument("redirect_url")
args = parser.parse_args()

# Set up the webdriver
driver = webdriver.Chrome()
driver.get("https://portal.azure.com")

print("Logging in to Azure...")

# Log in to Azure

# Send keys to input with a placeholder: 'Email, phone, or Skype'
WebDriverWait(driver, 20).until(
    EC.element_to_be_clickable(
        (By.CSS_SELECTOR, "input[placeholder='Email, phone, or Skype']")
    )
).send_keys(args.username)


driver.find_element(By.ID, "idSIButton9").click()

# Send keys to input with a type of password
WebDriverWait(driver, 20).until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, "input[type='password']"))
).send_keys(args.password)


driver.find_element(By.ID, "idSIButton9").click()

# Navigate to the app registration
driver.get(
    "https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationMenuBlade/Authentication/appId/34049628-fa93-4b39-b8c9-db594608afe1/isMSAApp//defaultBlade/"
)

# Add the redirect URI
redirect_url = args.redirect_url

print(f"Adding redirect URI: {redirect_url}")

# Click target linkText="Add URI"
WebDriverWait(driver, 100).until(
    EC.element_to_be_clickable((By.LINK_TEXT, "Add URI"))
).click()

print("Click Add URI done!")

# Click input with placeholder="e.g. https://example.com/auth"
WebDriverWait(driver, 100).until(
    EC.element_to_be_clickable(
        (By.CSS_SELECTOR, "input[placeholder='e.g. https://example.com/auth']")
    )
).click()

print("Click input with placeholder done!")

# Type at an input with a placeholder of placeholder="e.g. https://example.com/auth"
WebDriverWait(driver, 100).until(
    EC.element_to_be_clickable(
        (By.CSS_SELECTOR, "input[placeholder='e.g. https://example.com/auth']")
    )
).send_keys(redirect_url)

print("Type at an input with a placeholder done!")

# Now find an element with a text of redirect_url, then element.get_attribute("outerHTML")
input_element = driver.find_element(
    By.XPATH, f"//div[text()='{redirect_url}']/../div[1]"
)
for element in input_element:
    print(f"Input Element: {element.get_attribute('outerHTML')}")

# Simulate a smooth scroll like using mouse wheel to input[placeholder='e.g. https://example.com/auth']
driver.execute_script(
    "arguments[0].scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})",
    WebDriverWait(driver, 100).until(
        EC.element_to_be_clickable(
            (By.CSS_SELECTOR, "input[placeholder='e.g. https://example.com/auth']")
        )
    ),
)

print("Simulate a smooth scroll done!")

for i in range(1, 4):
    print(f"Waiting... {i} seconds")
    time.sleep(1)


# Simulate a javascript click like document.querySelector("#_weave_e_280 > div > div > div.fxs-lens-layout > div > div.fxs-part.fxs-part-no-fx-content-padding.fxs-part-for-template-blade > div.fxs-part-content.fxs-validationContainer.css-scope-Microsoft_AAD_RegisteredApps.css-scope-BladesApplicationsStylescss.css-scope-BladesAuthenticationStylescss.css-scope-BladesStylesWithWarningscss > div > div.msportalfx-docking-footer.msportalfx-padding > div:nth-child(1) > div").click()
# Check first if the element exists
print("Simulate a javascript click to send the redirect URI...")

# Get all the elements that has a "Save" text then print the element
save_elements = driver.find_elements(By.CSS_SELECTOR, "div[title='Save']")
for element in save_elements:
    # Print its html element
    print(f'Has Save: {element.get_attribute("outerHTML")}')

try:
    # Click the element
    WebDriverWait(driver, 3).until(
        EC.element_to_be_clickable(
            (
                By.XPATH,
                "/html/body/div[1]/div[4]/div[1]/div[1]/main/div[3]/div[2]/section/div[1]/div[2]/div[2]/div[4]/div[2]/div/div/div[2]/div/div[2]/div[2]/div/div[2]/div[1]/div",
            )
        )
    ).click()
except Exception as e:
    print(f"Exception: {e}")

print("Simulate a javascript click done!")

print("Redirect URI added successfully!")

for i in range(1, 4):
    print(f"Waiting... {i} seconds")
    time.sleep(1)

print("Closing the browser...")

driver.quit()
