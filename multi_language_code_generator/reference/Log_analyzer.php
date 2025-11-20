<?php

class LogAnalyzer
{
    /**
     * Parse an Apache log line and return extracted data.
     *
     * @param string $line
     * @return array{status:int}
     */
    public function parseLine(string $line): array
    {
        $parts = preg_split('/\s+/', trim($line));
        $status = isset($parts[8]) ? (int) $parts[8] : 0;

        return ['status' => $status];
    }

    /**
     * Analyze multiple log lines and compute metrics.
     *
     * @param string[] $lines
     * @return array{total_requests:int,error_rate:float}
     */
    public function analyze(array $lines): array
    {
        $total = count($lines);
        if ($total === 0) {
            return ['total_requests' => 0, 'error_rate' => 0.0];
        }

        $errors = 0;
        foreach ($lines as $line) {
            if ($this->parseLine($line)['status'] >= 400) {
                $errors++;
            }
        }

        $errorRate = ($errors / $total) * 100;

        return [
            'total_requests' => $total,
            'error_rate' => $errorRate,
        ];
    }
}


