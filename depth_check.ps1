$depth = 0
$content = Get-Content "c:\Users\Jakob\Youth-Work-Reporting\code.gs.txt"
$i = 1
foreach ($line in $content) {
    if ($line -match '\{') { $depth += ($line.ToCharArray() | Where-Object { $_ -eq '{' }).Count }
    if ($line -match '\}') { $depth -= ($line.ToCharArray() | Where-Object { $_ -eq '}' }).Count }
    if ($depth -lt 0) {
        Write-Output "IMBALANCE (too many }): Line $i"
        return
    }
    $i++
}
Write-Output "FINAL DEPTH: $depth"
