Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Lenovo\.gemini\antigravity\brain\595fe2a7-3824-47f8-b893-2281969fe6b2\.user_uploaded\media_1791358241366.png"
$destPath = "C:\Users\Lenovo\.gemini\antigravity\scratch\viskool-prototype\testimonial-aarav.png"

$srcImg = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Host "Width: $($srcImg.Width), Height: $($srcImg.Height)"

# The student photo is on the left side of the screenshot
$cropX = [int]($srcImg.Width * 0.02)
$cropY = [int]($srcImg.Height * 0.10)
$cropW = [int]($srcImg.Width * 0.43)
$cropH = [int]($srcImg.Height * 0.82)

$rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$cropped = $srcImg.Clone($rect, $srcImg.PixelFormat)

$cropped.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

$srcImg.Dispose()
$cropped.Dispose()
Write-Host "Cropped student photo successfully!"
